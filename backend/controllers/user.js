const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      email: req.body.email,
      password: hash,
      nickname: req.body.nickname
    });
    user
      .save()
      .then(result => {
        res.status(201).json({ message: "User created!", result: result });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
}
exports.login = (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ message: "Auth failed" });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({ message: "Auth failed" });
      }
      const token = jwt.sign(
        { userId:fetchedUser._id, userNickName: fetchedUser.nickname},
        process.env.JWT_KEY,
        { expiresIn: "1h" }
      );
      res.status(200).json({ message: "Auth success", token: token })
    })
    .catch(err => {
      return res.status(401).json({ message: "Auth failed" });
    });
}
