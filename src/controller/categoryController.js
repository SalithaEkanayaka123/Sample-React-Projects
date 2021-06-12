const Cattegory = require("../model/cattegory");
const createCattegory = async (req, res) => {
    if(req.body){
        const cattegory = new Cattegory(req.body);
        await cattegory.save()
            .then(data => {
                res.status(200).send({data: data });
            })
            .catch(error => {
                res.status(500).send({error: error });
            })
    }
}

const getAllCattegories = async (req, res) => {
    await Cattegory.find({}).populate("cattegories", 'name charges')//have to change
        .then(data => {
            res.status(200).send({data: data });
        })
        .catch(error => {
            res.status(500).send({error: error });
        })
}
const getVehiclesForCategories = async (req, res) => {
    if (req.params && req.params.id) {
        await Cattegory.findById(req.params.id)
            .populate("vehicles", 'code model type name')
            .then(data => {
                res.status(200).send({vehicles: data});
            })
            .catch(error => {
                res.status(500).send({error: error});
            })

    }
}

const getTripCharges = async (req, res) => {
    if(req.body){
        const Array = req.body;
        Array.finalValue = Array.finalValue + Array.duration * Array.chargePerRate*Array.vehicleCount;
        res.status(200).send({data: Array.finalValue });

    }

}

module.exports = {
    createCattegory,
    getAllCattegories,
    getVehiclesForCategories,
    getTripCharges
};