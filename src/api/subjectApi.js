const express = require("express");
const router = express.Router();
const controller = require("../controllers/subjectcontroller");
module.exports = function () {
    router.post('/create', controller.createSubject);
    router.get('/', controller.getAllSubjects);
    return router;
}