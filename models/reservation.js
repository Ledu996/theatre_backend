const mongoose = require("mongoose");
const { Schema } = mongoose;

const users = require("./users");
const acts = require("./act");

const reservationSchema = new Schema({
    date: Date, // only date //{type: Date, default: () => Date.now()} , //Date.now(),
    user_id: { type: Schema.Types.ObjectId, ref: users },
    act_id: { type: Schema.Types.ObjectId, ref: acts }
})


module.exports = mongoose.model("reservation", reservationSchema);