// import following modules

const Actror = require("../../models/actor");
const Act = require("../../models/act");
const Event = require("../../models/event");
const Reservation = require("../../models/reservation");

// service
const { sendEmail } = require("../email/index");
const reservation = require("../../models/reservation");

exports.postAnEvent = async (req, res) => {

    try {
        const { title, descriprion, date, picture } = req.body;
        const evnt = await Event.create({
            title,
            descriprion,
            date,
            picture // mutler
        })
        await evnt.save();
        res.send({ message: "Event successfully created" });
    } catch (e) {
        res.send({ message: "Failde to create an event" });
    }

}


exports.addAnActor = async (req, res) => {
    try {
        const { name, lastname, dateOfBirth } = req.body;
        console.log(dateOfBirth);
        const actor = await Actror.create({
            name,
            lastname,
            dateOfBirth
        });
        await actor.save();
        res.send({ message: "Actor has been added", status: 200 });
    } catch (e) {
        res.send({ message: "Failed to add an actor", status: 301 });
    }

}

exports.addAnAct = async (req, res) => { // creating new act not updating it
    try {
        const { name, date, actors } = req.body;
        console.log(name, date, actors);
        const act = await Act.create({
            name,
            date,
            actors
        });
        await act.save()
        res.send({ message: "Successfuly added new act", status: 200 });
    } catch (e) {
        res.send({ message: "Failed to add new act", status: 301 });
    }

} // on frontend you will get all the actors, when actors are droped to act just use their id

exports.deleteAnActor = async (req, res) => {
    try {
        const id = req.params.id;
        await Actror.deleteOne({ _id: id });
        res.send({ message: "Actor has been removed", status: 200 });
    } catch (e) {
        res.send({ message: "Failed to delete an actor", status: 401 });
    }
}

exports.deleteAnAct = async (req, res) => {
    try {
        const id = req.params.id;
        await Act.deleteOne({ _id: id });
        res.send({ message: "Act has been succesfully removed", status: 200 });
    } catch (e) {
        res.send({ message: "Failed to delete an act", status: 401 })
    }
}


exports.getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find()
            .populate({ path: "user_id", select: { "email": 1, "_id": 0 } })
            .populate({ path: "act_id", select: { "name": 1, "date": 1, "_id": 0 } })
        /*.exec((err, data) => {
            if(err) res.send({message: "Failed to find any reservation", status: 404});
            console.log(data);
            let dataArr =  data.map((reservation) => {
            return {email: reservation.user_id.email, acts: {name: reservation.act_id.name, date: reservation.act_id.date}};
            })
        res.send(dataArr);
    });*/
        res.send(reservations);
    } catch (e) {
        res.send({ message: "Reservations not found", status: 404 });
    }

}


exports.sendingReservationAprovment = async (req, res) => {

    try {
        const id = req.params.id;
        const reservation = await Reservation.findById(id).populate("user_id");
        const { firstname, email } = reservation.user_id;
        await sendEmail({ email, firstname });
        res.send({ message: "Email has been sent successfully", status: 200 });
    } catch (e) {
        console.log(e);
        res.send({ message: "Failed to get reservatin_id", status: 404 });
    }

}












