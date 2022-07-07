const mongoose = require("mongoose");
require("dotenv").config();


let url = process.env.URL;

exports.conection = async () => {
    try {
        await mongoose.connect(url);
        console.log("Connection successfuly established");
    } catch (e) {
        console.log("Connection Failed");
    }
}