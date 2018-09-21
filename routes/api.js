const express = require('express');
const {
  getAllProject,
} = require('../controllers/project');
const {
  getAllTeam,
} = require('../controllers/team');
const {
  getAllEvent, updateEvent, createEvent,
} = require('../controllers/calendar');

const router = express.Router();

/**
 * 3 types of object body
 * status : ['success', 'fail', 'error']
 * message
 * data
 */
router.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'API is live',
  });
});

/**
 * Project API
 */
router.get('/project/projects', getAllProject);

/**
 * Team Performance API
 */
router.get('/team/teams', getAllTeam);

/**
 * Calendar API
 */
router.get('/calendar/events', getAllEvent);
router.post('/calendar/events/update', updateEvent);
router.post('/calendar/events/create', createEvent);

/**
 * 404
 */
router.use((req, res) => (
  res.status(404).json({
    status: 'error',
    message: '404 not found',
  })
));

module.exports = router;
