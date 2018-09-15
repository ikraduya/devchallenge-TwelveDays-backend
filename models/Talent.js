const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  id: Number,
  name: String,
  stream: String,
  star: Number,
  pointBurnHist: [Number],
  PointRemainingHist: [Number],
  PointQueueHist: [Number],
  role: String,
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
