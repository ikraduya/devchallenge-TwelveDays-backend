/**
  * GET api/calendar/events
  * req.query:
*/
exports.getAllEvent = (req, res) => {
  return res.json({
    status: 'success',
    message: 'Get All Event Success',
  });
};
