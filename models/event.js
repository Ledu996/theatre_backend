const mongoose = require("mongoose");
const { Schema } = mongoose;


const eventSchema = new Schema({
    title: String,
    descriprion: String,
    date: { type: Date, default: () => Date.now() }, //Date, //{type: Schema.Types.Date, default: Date.now},
    picture: {
        data: Buffer,
        contentType: String
    }

})


module.exports = mongoose.model("event", eventSchema);

