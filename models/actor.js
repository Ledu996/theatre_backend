const mongoose = require("mongoose");
const { Schema } = mongoose;

const acts = require("./act");

const actorSchema = new Schema({
    name: String,
    surname: String,
    dateOfBirth: Date,
    acts: [{ type: Schema.Types.ObjectId, ref: acts }]
})


module.exports = mongoose.model("Actor", actorSchema);

