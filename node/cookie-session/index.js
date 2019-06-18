const Koa = require('koa')
const Router = require('koa-router')
const koaSession = require('koa-session')
const staticServer = require('koa-static')
const path = require('path')
const session_signed_keys = ['myy']

const app = new Koa()
app.keys = session_signed_keys
const router = new Router()
const sessionConfig = {
  key: 'sessionID',
  maxAge: 1000 * 60,
  rolling: true //每次响应的时候, 刷新有效期

}
const session = new koaSession(sessionConfig, app)

app.use(session)
app.use(staticServer(path.join(__dirname, './static')))

// router.get('/', async (ctx) => {
//   ctx.body = `
//   <a href="/user">/user</a>
//   <a href="/post">/post</a>
//   `
// })
router.get('/', async (ctx) => {
  ctx.body = `
  <a href="/user">/user</a>
  <a href="/post">/post</a>
  `
})
router.get('/user', async (ctx) => {
  ctx.cookies.set('name', "myy", {
    path: '/user',
    httpOnly: false
  })
  ctx.body = 'user'
})
router.get('/user/abc', async (ctx) => {
  ctx.body = 'abc'
})
router.get('/post', async (ctx) => {
  ctx.body = 'post'
})
router.get('/login', async ctx => {
  const {
    name,
    password
  } = ctx.query
  if (name === 'test' && password === 'test') {
    ctx.session.login = true
    ctx.type = 'html'
    ctx.body = `
    <a href='/testlogin'>测试登录状态</a>
    `
  } else {
    ctx.session.login = false
    ctx.body = `error name or password`
  }
})
router.get('/testlogin', async ctx => {
  if (ctx.session.login) {
    ctx.body = '登录成功'
  } else {
    ctx.redirect('/')
  }
})
app.use(router.routes())

app.listen(9999, () => {
  console.log('Running......')
})