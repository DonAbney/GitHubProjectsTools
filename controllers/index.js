var express = require('express')
router = express.Router()

router.use('/', require('./projectsHomeRouter'))
//router.use('/list', require('./listProjects'))

module.exports = router
