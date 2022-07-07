const mongoose = require("mongoose");
const { Schema } = mongoose;
const actors = require("./actor")


const actSchema = new Schema({
    name: String,
    date: Date,
    actors: [{ type: Schema.Types.ObjectId, ref: actors }]
})



module.exports = mongoose.model('act', actSchema);