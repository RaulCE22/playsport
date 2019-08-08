const mongoose = require("mongoose");

const participantSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event", require: true },
  userNickName: { type: String, require: true },
});

module.exports = mongoose.model("Participant", participantSchema);
