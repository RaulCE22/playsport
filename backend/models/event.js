const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true
  },
  creatorNickName: { type: String, require: true },
  title: { type: String, require: true },
  place: { type: String, require: true },
  date: { type: Date },
  numPeople: { type: Number, require: true },
  people: { type: [{ nickname: String, id: String }] }
});

module.exports = mongoose.model("Event", eventSchema);
