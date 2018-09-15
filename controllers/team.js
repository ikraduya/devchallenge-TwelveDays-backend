/**
  * GET api/team/teams
  * req.query:
*/
exports.getAllTeam = (req, res) => {
  return res.json({
    status: 'success',
    message: 'Get All Team Success',
  });
};
