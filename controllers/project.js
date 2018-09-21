const Project = require('../models/Project');
const Talent = require('../models/Talent');

/**
  * GET api/project/projects
  * req.query:
*/
exports.getAllProject = (req, res) => {
  const projectQuery = Project
    .find({})
    .populate('memberList');

  Promise.resolve(projectQuery)
    .then((projectList) => {
      return res.json({
        status: 'success',
        message: 'Get all project success',
        data: projectList,
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
