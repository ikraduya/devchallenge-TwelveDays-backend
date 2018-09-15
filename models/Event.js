const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  notes: String, 
  time: Date,
  location: String,
  eventCount: Number
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
