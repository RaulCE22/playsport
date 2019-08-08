const Participant = require("../models/participant");

exports.join = (req, res, next) => {
  const participant = new Participant({
    userId: req.userData.userId,
    userNickName: req.userData.userNickName,
    eventId: req.body.eventId,
    admin: req.body.creator === req.userData.userId
  });
  console.log(participant);
  participant
  .save()
  .then(result => {
      res.status(201).json({ message: "Participant added!", result: result });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.get = (req, res, next) => {
  Participant.find({eventId: req.params.eventId})
    .then(participants => {
      res.status(200).json({ message: "All participants", participants: participants });
    })
};
