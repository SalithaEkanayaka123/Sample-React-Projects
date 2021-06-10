const express = require("express");
const router = express.Router();
const controller = require("../controllers/coursecontroller");
module.exports = function () {
    router.post('/create', controller.createCourse);
    router.get('/', controller.getAllCourses);
    router.get('/:id', controller.getSubjectsForCourses);
    router.get('/amount/:id', controller.calculateSubjectAmount);
    return router;
}