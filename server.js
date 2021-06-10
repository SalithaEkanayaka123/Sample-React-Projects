//adding dependencies 
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");//handle body data using json
const cors = require("cors");
const dotenv = require("dotenv");
const subjectApi = require('./src/api/subjectApi');
const courseApi = require('./src/api/courseApi');
const app = express();
//declare .env folder
require("dotenv").config();

//port that needed to connect to the server
const PORT = process.env.PORT || 8070;//change if want

//use declared dependencies above
app.use(cors());
//use json format
app.use(bodyParser.json());

//use MONGODB url in .env
const MONGODB_URI = process.env.MONGODB_URI;//

//connect to mongodb 
mongoose.connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err) => {
    if(err){
        console.log('Database Error: ' + err.message);
    }
});

//open the connection
mongoose.connection.once("open", () => {
    console.log("Mongodb Connection success!");
})

//Access Student.js file 
//const studentRouter = require("./routes/students.js");//hqve to change

//http://localhost:8070/subject
app.use("/subject", subjectApi());//have to change
//http://localhost:8070/course
app.use("/course", courseApi());
app.route('/').get((req, res) => {
    res.send('SLIIT AF 2018 FINAl API');
});
//port that listen to the server
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})