const express = require("express");
const router = express.Router();
const { Ints } = require('./ints');
const { Ents } = require('./ents');
const { Create } = require('./createAgent');

router.route("/updateInts").post(Ints);
router.route("/updateEnts").post(Ents);
router.route("/createAgent").post(Create);
module.exports = router