var express = require('express');
var router = express.Router();
var getProjectsHome = require('./getProjectsHome');

router.get('/', getProjectsHome);

module.exports = router;
