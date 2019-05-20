const express = require('express')
const router = express.Router()
const url = require("url")

router.get('/', function (req, res) {
    const reqObj = url.parse(req.url)
    res.render('404.html', {
        author:reqObj.pathname
    })
})

router.get('/post', function (req, res) {
    res.render('post.html')
})

router.post('/post', function (req, res) {
    data = req.body
    res.redirect('/data')
})

router.get('/data', function (req, res) {
    res.render('data.html', data)
})

module.exports = router
