/**
  * GET api/project/projects
  * req.query:
*/
exports.getAllProject = (req, res) => {
  return res.json({
    status: 'success',
    message: 'Get All Project Success',
  });
};
