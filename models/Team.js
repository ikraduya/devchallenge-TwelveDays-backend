const mongoose = require('mongoose');

const { Schema } = mongoose;

const teamSchema = new mongoose.Schema({
  members: [{ type: Schema.Types.ObjectId, ref: 'Talent' }],
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
}, { timestamps: true });

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
