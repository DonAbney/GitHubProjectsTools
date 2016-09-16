var express = require('express')
router = express.Router()

router.use('/', require('./projectsHomeRouter'))
router.use('/list', require('./getProjects'))

module.exports = router
