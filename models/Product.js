const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  diff: Number
}, { timestamps: true });

const Event = mongoose.model('Event', productSchema);

module.exports = Event;
