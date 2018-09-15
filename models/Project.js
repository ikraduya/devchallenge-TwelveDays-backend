const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const projectSchema = new mongoose.Schema({
  title: String, 
  desc: String,
  unit: String,
  stakeholder: String,
  sprint: Number,
  status: ['Completed','Ongoing','Rejected','In Queue'],
  comment: String,
  performance: Number,
  memberList: [{ type: Schema.Types.ObjectId, ref: 'Talent' }],
  startDate: Date,
  endDate: Date
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
