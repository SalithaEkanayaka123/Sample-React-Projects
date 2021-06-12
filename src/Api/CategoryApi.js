const express = require("express");
const router = express.Router();
const controller = require("../controller/categoryController");
module.exports = function () {
    router.post('/create', controller.createCattegory);
    router.get('/', controller.getAllCattegories);
    router.get('/getVehicles/:id', controller.getVehiclesForCategories);
    router.post('/test1/', controller.getTripCharges);
    return router;
}