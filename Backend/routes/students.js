const router = require("express").Router();
let Student = require("../models/Student");

//take the data that inserted in front end as a request from server
//inserting data
router.route("/add").post((req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    //create an object using values
    const newStudent = new Student({
        name,
        age,
        gender
    })

    //passing object to database
    newStudent.save().then(() => {
        res.json("Student Added")
    }).catch((err) => {
        console.log(err);
    })

})

//display data
router.route("/").get((req, res) => {
    //Student.findById: display one student
    Student.find().then((students) => {
        res.json(students)
    }).catch((err) => {
        console.log(err);
    })

})

//update data
//http://localhost:8070/Student/update/:id 
//id is encripted number which cannot be identified 
//instead put we can use post also

router.route("/update/:studentid").put(async(req, res) => {
    //async function increase the responsiveness of the app
    let userID = req.params.studentid;
    //d structure
    const { name, age, gender } = req.body;

    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userID, updateStudent).then(() => {
        res.status(200).send({ status: "User updated" })
    }).catch((err) => {
        console.log(err);
        //res.status(500).send({status: "Error with updating data"})
    })

})

//delete data 
router.route("/delete/:studentid").delete(async(req, res) => {
    //async function increase the responsiveness of the app
    let userID = req.params.studentid;
    await Student.findByIdAndDelete(userID)
        .then(() => {
            res.status(200).send({ status: "User deleted" });
        }).catch((err) => {
            console.log(err);
            //res.status(500).send({status: "Error with updating data"})
        })

})

//get one user data 
router.route("/get/:studentid").get(async(req, res) => {
    //Student.findById: display one student
    let userID = req.params.studentid;
    //when using a name or other than id you have to use use findbyone
    const user = await Student.findById(userID)
        .then((student) => {
            res.status(200).send({ status: "User found", student });
        }).catch((err) => {
            console.log(err.message);
        })

})

module.exports = router;