const express = require("express");
const router = express.Router();

const ctrl = require("./index")

router.get('/reservations', ctrl.getAllReservations);
router.post('/sendEmail/:id', ctrl.sendingReservationAprovment);
router.post('/event', ctrl.postAnEvent);
router.post('/addActor', ctrl.addAnActor);
router.post('/addAct', ctrl.addAnAct);
router.delete('/deleteActor/:id', ctrl.deleteAnActor);
router.delete('/deleteAct', ctrl.deleteAnAct);


module.exports = router;