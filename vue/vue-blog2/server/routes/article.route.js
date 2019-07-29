const router = require('express').Router()

const article = require('../controllers/')


router.get('/articles', function (req, res) {
  res.json({
    total: 0
  })
})

module.exports = router