 const Subject = require("../models/subject");
 const createSubject = async (req, res) => {
    if(req.body){
        const subject = new Subject(req.body);
        await subject.save()
        .then(data => {
            res.status(200).send({data: data });
        })
        .catch(error => {
            res.status(500).send({error: error });
        })
    }
 }

 const getAllSubjects = async (req, res) => {
    await Subject.find({}).populate("courses", 'name code passmark lecture')
    .then(data => {
        res.status(200).send({data: data });
    })
    .catch(error => {
        res.status(500).send({error: error });
    })
 }
 
module.exports = {
    createSubject,
    getAllSubjects
};