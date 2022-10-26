const express = require("express");
const router = express.Router();
const { Ints } = require('./ints');
const { Ents } = require('./ents');

router.route("/updateInts").post(Ints);
router.route("/updateEnts").post(Ents);
module.exports = router