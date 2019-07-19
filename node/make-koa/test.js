const Koa = require('./lib/application')
const delegates = require('delegates')
const app = new Koa()

app.listen(3000, () => {
  console.log("Running : ", 3000)
})

const ctx = {
  request: {
    url: 'baidu.com'
  },
  response: {
    body: 'adada'
  }
}

delegates(ctx, 'request')
  .access('url')
delegates(ctx, 'request')
  .access('body')
console.log(ctx.url === ctx.request.url)