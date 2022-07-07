const express = require("express");
const router = express.Router();

const ctrl = require("./index");


router.get('/', ctrl.getAllActors);
router.get('/:id', ctrl.getActorById);

module.exports = router;
