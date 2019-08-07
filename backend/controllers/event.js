const Event = require("../models/event");
const jwt = require("jsonwebtoken");

exports.create = (req, res, next) => {
  const tokenDecripted = jwt.decode(req.header.authorization, process.env.JWT_KEY)
  const event = new Event({
    creatorId: req.userData.userId ,
    creatorNickName: req.userData.nickName,
    title: req.body.title,
    place: req.body.place,
    date: req.body.date,
    numpeople: req.body.numpeople,
    people: []
  })

  event
      .save()
      .then(result => {
        res.status(201).json({ message: "User created!", result: result });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
}

exports.getAll = (req, res, next) => {

}
