const { ObjectId } = require('mongoose').Types;
const moment = require('moment-timezone');
const Events = require('../models/Events');

/**
  * GET api/calendar/events
  * req.query:
*/
exports.getAllEvent = (req, res) => {
  const eventQuery = Events.find({});

  Promise.resolve(eventQuery)
    .then((eventList) => {
      const eventListGrouped = [];
      eventList.forEach((event) => {
        const dateIdx = eventListGrouped.findIndex(eventElmt => (moment(event.time).isSame(moment(eventElmt.date, 'DD/MM/YYYY'), 'day')));
        if (dateIdx !== -1) {
          const newNote = {
            id: event._id,
            time: moment(event.time).format('HH:mm:ss'),
            notes: event.notes,
            location: event.location,
          };
          eventListGrouped[dateIdx].notesList.push(newNote);
        } else {
          const newEventDate = {
            date: moment(event.time).format('DD/MM/YYYY'),
            notesList: [
              {
                id: event._id,
                time: moment(event.time).format('HH:mm:ss'),
                notes: event.notes,
                location: event.location,
              }
            ],
          };
          eventListGrouped.push(newEventDate);
        }
      });

      return res.json({
        status: 'success',
        message: 'Get all event success',
        data: eventListGrouped,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.json({
        status: 'error',
        message: 'Error while querying database',
      });
    });
};

/**
  * POST api/calendar/events/update
  * req.body: eventId, time, notes, location
*/
exports.updateEvent = (req, res) => {
  const eventId = ObjectId(req.body.eventId);
  const { time, notes, location } = req.body;

  const updateEventQuery = Events
    .findByIdAndUpdate(eventId, { time, notes, location });

  Promise.resolve(updateEventQuery)
    .then(() => {
      return res.json({
        status: 'success',
        message: 'Update event success',
      });
    })
    .catch((error) => {
      console.log(error);
      return res.json({
        status: 'error',
        message: 'Error while updating event',
      });
    });
};

/**
  * POST api/calendar/events/create
  * req.body: time, notes, location
*/
exports.createEvent = (req, res) => {
  const { time, notes, location } = req.body;

  const createEventQuery = Events.create({
    time,
    notes,
    location,
  });

  Promise.resolve(createEventQuery)
    .then((createdEvent) => {
      return res.json({
        status: 'success',
        message: 'Create event success',
        data: createdEvent,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.json({
        status: 'error',
        message: 'Error while creating event',
      });
    });
}
