const express = require("express");
const router = express.Router();
const controller = require("../controller/VehiclController");
module.exports = function () {
    router.post('/create', controller.createVehicle);
    router.get('/', controller.getAllVehicles);
    router.get('/singleElement/:id', controller.getSingleVehicle);
    router.post('/update/:id', controller.updateVehicles);
    router.delete('/delete/:id', controller.deleteVehicles);
    // router.get('/amount/:id', controller.calculateSubjectAmount);
    return router;
}