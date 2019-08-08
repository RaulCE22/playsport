const Event = require("../models/event");
const jwt = require("jsonwebtoken");

exports.create = (req, res, next) => {
  const event = new Event({
    creator: req.userData.userId,
    title: req.body.title,
    place: req.body.place,
    date: req.body.date,
    numPeople: req.body.numPeople
  });
  event
  .save()
  .then(result => {
      res.status(201).json({ message: "Event created!", result: result });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.getMyEventsCreated = (req, res, next) => {
  Event.find({creator: req.userData.userId})
    .then(events => {
      res.status(200).json({ message: "All mi events", events: events });
    });
};
