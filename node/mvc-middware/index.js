const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const validate = require('./middlewares/validate.middleware')
const handle = require('./middlewares/handle.middleware')
const app = express()

app
  .use(bodyParser.urlencoded({
    extended: false
  }))
  .use(bodyParser.json({
    limit: '50m'
  }))
  .use(handle)
  .use(validate)
  .use(router)

function start() {
  app.listen(3025, () => {
    console.log('Running in port : 3025')
  })
}

start()