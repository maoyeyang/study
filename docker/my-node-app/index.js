var express = require('express')

var app = express()

app.get('/', (req, res) => {
  res.end('help-block')
})

app.listen(3025, () => {
  console.log('Running in port 3025');
})