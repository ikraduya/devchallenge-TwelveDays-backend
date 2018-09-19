const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  notes: String,
  time: String,
  location: String,
  eventCount: Number
}, { timestamps: true });

const Events = mongoose.model('Events', eventSchema);

module.exports = Events;
