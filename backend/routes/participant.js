const express = require("express");
const ParticipantController = require("../controllers/participant");
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post("/join",checkAuth, ParticipantController.join);
router.get("/:eventId",checkAuth, ParticipantController.get);

module.exports = router;
