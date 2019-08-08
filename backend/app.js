const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
const eventRoutes = require("./routes/event");
const participantRoutes = require("./routes/participant");

const app = express();

mongoose
  .connect(
    "mongodb+srv://raulce22:" + process.env.MONGO_ATLAS_PW + "@cluster0-fjk7c.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch(() => {
    console.log("Error connect!!");
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/user",userRoutes )
app.use("/api/event",eventRoutes )
app.use("/api/participant",participantRoutes )

module.exports = app;
