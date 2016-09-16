var Repo = require('../models/repo');

function getProjects(req, res) {

  var repo = new Repo();

  var projectsList = repo.getProjects();
  res.end(JSON.stringify(projectsList));

}

module.exports = getProjects;
