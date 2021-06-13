const Course = require("../models/course");
const {Worker, isMainThread} = require('worker_threads');
const createCourse = async (req, res) => {
   if(req.body){//ok
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
            res.status(200).send({ status: "User dupdated" });
        })
        .catch(error => {
            res.status(500).send({error: error });
        })

    }
 }

const deleteCourses = async (req, res) => {
    await Course.findByIdAndDelete(req.params.id)
        .then((data) => {
            res.status(200).send({ status: "User deleted" });
        }).catch((err) => {
            res.status(500).send({error: err});
        })
}

 const updateCourses = async (req, res) => {
    let courseID = req.params.id;
     if (req.params) {
         if (req.params.id) {
             const {name, code, passmark, lecture} = req.body;

             const updateCourse = {
                 name,
                 code,
                 passmark,
                 lecture
             }

             await Course.findByIdAndUpdate(courseID, updateCourse)
                 .then(data => {
                     res.status(200).send({subjects: data});
                 }).catch((err) => {
                     console.log(err);
                         res.status(500).send({error: err});
                     }
                 )


         }
     }
 }
 const calculateSubjectAmount = async (req, res) => {
     /**
      *const calculateSubjectAmount = async (req, res) => {
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
      */
    if (req.params && req.params.id) {
        const course = await Course.findById(req.params.id)
        .populate("subjects", 'name description amount');
        let cal = [];
        if (course.subjects.length > 0) {
            course.subjects.map((subject) => {
                let values = {
                    amount: subject.amount
                }
                cal.push(values);
                console.log(cal);
            })
        }
        console.log(cal);
        const worker = new Worker("./src/Worker_Thread/calculation.js", {workerData: {data:cal}});
        worker.on('message',(data)=> {
            console.log(data);
            console.log("Calculation Successfull final value is " + data);
            res.status(200).send({value: data});
        })

        worker.on('error',(data)=> {
            console.log("Calculation Error");
            console.log(data.message)
            res.status(500).send({error: data});
        })

        worker.on('exit',(data)=> {
            console.log("Exit From Calculation");
            console.log(data.message)
            res.status(500).send({error: data});
        })
        worker.postMessage("Message from, Parent to Child.");


    }
 }

module.exports = {
    createCourse,
    getAllCourses,
    getSubjectsForCourses,
    calculateSubjectAmount,
    updateCourses,
    deleteCourses

};