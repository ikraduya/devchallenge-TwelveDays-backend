const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new mongoose.Schema({
  title: String,
  desc: String,
  unit: String,
  stakeholder: String,
  sprint: Number,
  status: {
    type: String,
    validate: (val => ['Completed', 'Ongoing', 'Rejected', 'In Queue'].includes(val)),
  },
  comment: String,
  performance: Number,
  memberList: [{ type: Schema.Types.ObjectId, ref: 'Talent' }],
  startDate: Date,
  endDate: Date
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
