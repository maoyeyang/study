const {
  Nuxt,
  Builder
} = require('nuxt')
const express = require('express')
const path = require('path')
const config = require('../nuxt.config.js')

const app = express()

async function start() {
  const nuxt = new Nuxt(config)

  if (true) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(nuxt.render) // 使用此中间件

  app.listen(3025, () => {
    console.log("Running", 3025)
  })
}
start()