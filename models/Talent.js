const mongoose = require('mongoose');

const talentSchema = new mongoose.Schema({
  name: String,
  stream: String,
  star: Number,
  pointBurnHist: [Number],
  pointRemainingHist: [Number],
  pointQueueHist: [Number],
  role: String,
}, { timestamps: true });

const Talent = mongoose.model('Talent', talentSchema);

module.exports = Talent;
