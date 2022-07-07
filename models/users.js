const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    dateOfBirth: Date,
})


module.exports = mongoose.model("user", userSchema);