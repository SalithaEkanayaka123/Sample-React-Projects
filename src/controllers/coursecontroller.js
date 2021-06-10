const Course = require("../models/course");
const createCourse = async (req, res) => {
   if(req.body){
       const course = new Course(req.body);
       await course.save()
       .then(data => {
           res.status(200).send({data: data });
       })
       .catch(error => {
           res.status(500).send({error: error });
       })
   }
}

const getAllCourses = async (req, res) => {
    await Course.find({}).populate("subjects", 'name description amount')
    .then(data => {
        res.status(200).send({data: data });
    })
    .catch(error => {
        res.status(500).send({error: error });
    })
 }

 const getSubjectsForCourses = async (req, res) => {
    if (req.params && req.params.id) {
        await Course.findById(req.params.id)
        .populate("subjects", 'name description amount')
        .then(data => {
            res.status(200).send({subjects: data });
        })
        .catch(error => {
            res.status(500).send({error: error });
        })

    }
 }
 const calculateSubjectAmount = async (req, res) => {
    if (req.params && req.params.id) {
        const course = await Course.findById(req.params.id)
        .populate("subjects", 'name description amount');
        let total = 0;
        if (course.subjects.length > 0) {
            course.subjects.map((subject) => {
                total += subject.amount;
            })
            
        }

        res.status(200).send({ total: total });

    }
 }

module.exports = {
    createCourse,
    getAllCourses,
    getSubjectsForCourses,
    calculateSubjectAmount
};