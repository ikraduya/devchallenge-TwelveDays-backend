const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  time: Date,
  notes: String,
  location: String,
}, { timestamps: true });

const Events = mongoose.model('Events', eventSchema);

module.exports = Events;
