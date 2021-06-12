const Vehicle = require("../model/Vehicle");
const createVehicle = async (req, res) => {
    if(req.body){
        const vehicle = new Vehicle(req.body);
        await vehicle.save()
            .then(data => {
                res.status(200).send({data: data });
            })
            .catch(error => {
                res.status(500).send({error: error });
            })
    }
}

const getAllVehicles = async (req, res) => {
    await Vehicle.find({}).populate("vehicles", 'code model type name')
        .then(data => {
            res.status(200).send({data: data });
        })
        .catch(error => {
            res.status(500).send({error: error });
        })
}

const deleteVehicles = async (req, res) => {
    await Vehicle.findByIdAndDelete(req.params.id)
        .then((data) => {
            res.status(200).send({ status: "User deleted" });
        }).catch((err) => {
            res.status(500).send({error: err});
        })
}

const updateVehicles = async (req, res) => {
    let vehicleID = req.params.id;
    if (req.params) {
        if (req.params.id) {
            const {name, code, passmark, lecture} = req.body;

            const updateVehicle = {
                name,
                code,
                passmark,
                lecture
            }

            await Vehicle.findByIdAndUpdate(vehicleID, updateVehicle)
                .then(data => {
                    res.status(200).send({subjects: data});
                }).catch((err) => {
                        console.log(err);
                        res.status(500).send({error: err});
                    }
                )
//

        }
    }
}

const getSingleVehicle = async (req, res) => {
    if (req.params && req.params.id) {
        await Vehicle.findById(req.params.id)
            .populate("vehicles", 'code model type name')
            .then(data => {
                res.status(200).send({ status: "Vehicle Selected" });
            })
            .catch(error => {
                res.status(500).send({error: error });
            })

    }
}

module.exports = {
    createVehicle,
    getAllVehicles,
    updateVehicles,
    deleteVehicles,
    getSingleVehicle
};