const Project = require('../models/Product');

/**
  * GET api/project/projects
  * req.query:
*/
exports.getAllProject = (req, res) => {
  const projectQuery = Project
    .find()
    .populate({
      path: 'memberList',
    });

  Promise.resolve(projectQuery)
    .then((projectList) => {
      console.log(projectList);
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
