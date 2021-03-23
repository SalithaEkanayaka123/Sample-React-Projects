//declare dependencies 
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
//declare .env folder
require("dotenv").config();

//port that needed to connect to the server
const PORT = process.env.PORT || 8070;

//use declared dependencies above
app.use(cors());
//use json format
app.use(bodyParser.json());

//use MONGODB url in .env
const URL = process.env.MONGODB_URL;

//connect to mongodb 
mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

//create a connection
const connection = mongoose.connection;

//open the connection
connection.once("open", () => {
    console.log("Mongodb Connection success!");
})

//Access Student.js file 
const studentRouter = require("./routes/students.js");

//http://localhost:8070/student
app.use("/student", studentRouter);

//port that listen to the server
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})