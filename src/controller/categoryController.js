const Cattegory = require("../model/cattegory");
const {Worker, isMainThread} = require('worker_threads');
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

    const worker = new Worker("../Backend/src/Worker_Thread/calculation.js", {workerData: {data:req.body}});
    worker.on('message',(data)=> {
        console.log(data);
        console.log("Calculation Successfull final value is " + data);
        res.status(200).send({value: data});
    })

    worker.on('error',(data)=> {
        console.log("Calculation Error");
        console.log(data.message)
        es.status(500).send({error: error});
    })

    worker.on('exit',(data)=> {
        console.log("Exit From Calculation");
        console.log(data.message)
        res.status(500).send({error: error});
    })
    worker.postMessage("Message from, Parent to Child.");

}

module.exports = {
    createCattegory,
    getAllCattegories,
    getVehiclesForCategories,
    getTripCharges
};