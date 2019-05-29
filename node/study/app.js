const express = require("express")
const bodyParser = require('body-parser')
const path=require('path')
const router = require('./router')


const app = express()

app.engine('html', require('express-art-template'))
app.set('views',path.join(__dirname,'./views/'))

app.use(express.static(path.join(__dirname,'./public/')))

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())



app.use(router)

app.listen(3000, function () {
    console.log("Running .....")
})
