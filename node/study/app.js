const express = require("express")
const bodyParser = require('body-parser')
const router = require('./router')


const app = express()
var data

app.use(express.static('./public/'))
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.engine('html', require('express-art-template'))

app.use(router)

app.listen(3000, function () {
    console.log("Running .....")
})
