const mongoose = require('mongoose');

const Events = require('../models/Events');
const Product = require('../models/Product');
const Project = require('../models/Project');
const Talent = require('../models/Talent');
const Team = require('../models/Team');

const config = require('../config');

mongoose.connect(config.mongodb, { useNewUrlParser: true });
mongoose.set('debug', true);
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.');
  process.exit();
});

const memberListIndihome = [
  {
    _id: mongoose.Types.ObjectId(),
    name: 'Budi Artianto',
    stream: 'Backend',
    pointBurnHist: [0, 100, 110, 101],
    pointRemainingHist: [0, 100, 20, 30],
    pointQueueHist: [0, 20, 11, 30],
    star: 4,
    role: 'UX',
  },
  {
    _id: mongoose.Types.ObjectId(),
    name: 'Tono Budiman',
    stream: 'Backend',
    pointBurnHist: [0, 100, 110, 102],
    pointRemainingHist: [0, 10, 20, 30],
    pointQueueHist: [0, 20, 11, 30],
    star: 4,
    role: 'FE',
  },
  {
    _id: mongoose.Types.ObjectId(),
    name: 'Wawan Aja',
    stream: 'Frontend',
    pointBurnHist: [0, 100, 110, 0],
    pointRemainingHist: [0, 10, 20, 30],
    pointQueueHist: [0, 20, 11, 30],
    star: 4,
    role: 'BE',
  },
];

const memberListTemanBerbagi = [
  {
    _id: mongoose.Types.ObjectId(),
    name: 'Budi Artiantos',
    stream: 'Backend',
    pointBurnHist: [0, 100, 110, 101],
    pointRemainingHist: [0, 100, 20, 30],
    pointQueueHist: [0, 20, 11, 30],
    star: 4,
    role: 'QA',
  },
  {
    _id: mongoose.Types.ObjectId(),
    name: 'Tono Budimans',
    stream: 'Backend',
    pointBurnHist: [0, 100, 110, 102],
    pointRemainingHist: [0, 10, 20, 30],
    pointQueueHist: [0, 20, 11, 30],
    star: 4,
    role: 'MOBILE',
  },
  {
    _id: mongoose.Types.ObjectId(),
    name: 'Wawan Ajas',
    stream: 'Frontend',
    pointBurnHist: [0, 100, 110, 0],
    pointRemainingHist: [0, 10, 20, 30],
    pointQueueHist: [0, 20, 11, 30],
    star: 4,
    role: 'UX',
  },
];

const projectList = [
  {
    title: 'My Indihome Consumen',
    desc: 'This is sample description about project',
    unit: 'Consumer',
    stakeholder: 'DEGM',
    sprint: 4,
    status: 'Rejected',
    comment: 'Lorem Ipsum Dolor Sit Amet',
    performance: 3,
    startDate: new Date('2018-06-12'),
    endDate: new Date('2018-06-22'),
    memberList: memberListIndihome.map(member => (member._id)),
  },
  {
    title: 'Teman Berbagi',
    desc: 'This is sample description about Teman Berbagi',
    unit: 'TNT',
    stakeholder: 'TNT',
    sprint: 15,
    status: 'Rejected',
    comment: 'Lorem Ipsum Dolor Sit Amet',
    performance: 2,
    startDate: new Date('2018-07-12'),
    endDate: new Date('2018-07-22'),
    memberList: memberListTemanBerbagi.map(member => (member._id)),
  },
];

const teamList = [
  {
    name: "Teman Berbagi",
    members: memberListTemanBerbagi.map(member => (member._id)),
    events: eventList.map(event => event._id)
  }
];

const productList = [
  {
    name: "MyNation",
    rank: 1,
    diff: 0
  },
  {
    name: "YourLyfe",
    rank: 2,
    diff: 0
  },
  {
    name: "BUMN",
    rank: 3,
    diff: 2
  },
  {
    name: "MyIndihome",
    rank: 4,
    diff: 3
  },
  {
    name: "Sobat BUMN",
    rank: 5,
    diff: -1
  },
  {
    name: "Open Trip",
    rank: 6,
    diff: -2
  },
  {
    name: "ODP Hunter",
    rank: 7,
    diff: 5
  },
  {
    name: "SIIS",
    rank: 8,
    diff: 6
  }
];

const eventList = [
  { 
    _id: mongoose.Types.ObjectId(),
    time:'15/09/2018 17:00:00',
    notes: 'Bertemu dengan Pak Rudi di Bandara Halim membawa dokumen terkait projek.',
    location: 'Bandara Halim Kusuma',
    eventCount: 1,
  },
  { 
    _id: mongoose.Types.ObjectId(),
    time:'17/09/2018 11:00:00',
    notes: 'Bertemu dengan Pak Rudi di Bandara Halim membawa dokumen terkait projek.',
    location: 'Bandara Halim Kusuma',
    eventCount: 4,
  }
];

Talent.remove()
  .then(() => Talent.insertMany(memberListIndihome))
  .then(() => Talent.insertMany(memberListTemanBerbagi))
  .then(() => console.log('Talents reset done'));

Project.remove()
  .then(() => Project.insertMany(projectList))
  .then(() => console.log('Projects reset done'));

Events.remove()
  .then(() => Events.insertMany(eventList))
  .then(() => console.log('Events reset done'));

Product.remove()
  .then(() => Product.insertMany(productList))
  .then(() => console.log('Products reset done'));

Team.remove()
  .then(() => Team.insertMany(teamList))
  .then(() => console.log('Team reset done'));