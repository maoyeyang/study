const router = require('express').Router()
const user = require('../controllers/user.controller')

router.post('/api/login', user.login)

module.exports = router