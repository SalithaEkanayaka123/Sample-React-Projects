const mongoose = require('mongoose');
const schema = mongoose.Schema;

//creating a object
const studentSchema = new schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
})

//Student is the table name (inside the brackets)
const Student = mongoose.model("Student", studentSchema);

//export the model 
module.exports = Student;