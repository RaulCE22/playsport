const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true, },
  title: { type: String, require: true },
  place: { type: String, require: true },
  date: { type: Date },
  numPeople: { type: Number, require: true },
});

module.exports = mongoose.model("Event", eventSchema);
