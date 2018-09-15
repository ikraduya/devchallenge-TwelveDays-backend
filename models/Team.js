const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const eventSchema = new mongoose.Schema({
  members: [{ type: Schema.Types.ObjectId, ref: 'Talent' }],
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
