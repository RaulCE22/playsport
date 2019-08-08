const express = require("express");
const EventController = require("../controllers/event");
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post("/save", checkAuth,  EventController.create);
router.get("/getMyEventsCreated", checkAuth,  EventController.getMyEventsCreated);
router.get("/get/:id", checkAuth,  EventController.getEvent);

module.exports = router;
