const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    console.log(req.headers);

    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    console.log(decodedToken);
    req.userData = {
      userId: decodedToken.userId,
    }
    next()
  } catch (error) {
    res.status(401).json({ message: "Auth failed!"})
  }
}
