//adding dependencies 
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");//handle body data using json
const cors = require("cors");
const dotenv = require("dotenv");



//have to change
const vehicleApi = require('./src/Api/VehicleApi');
const categoryApi = require('./src/Api/CategoryApi');
// const courseApi = require('./src/api/courseApi');



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

//have to change
//http://localhost:8070/vehicle
app.use("/vehicle", vehicleApi());

//http://localhost:8070/category
app.use("/category", categoryApi());

//have to change
app.route('/').get((req, res) => {
    res.send('Application is running successfully');
});



//port that listen to the server
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})