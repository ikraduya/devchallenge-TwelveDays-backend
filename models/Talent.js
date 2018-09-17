const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  stream: String,
  star: Number,
  pointBurnHist: [Number],
  pointRemainingHist: [Number],
  pointQueueHist: [Number],
  role: String,
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
