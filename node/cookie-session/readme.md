## why
http是无状态的
客户端和服务器 再次请求的时候 知道客户端是谁

## -S
--save 把版本放在"dependencies": {}
npm i
在json 文件里寻找各个依赖并安装
本地开发 安装的node_modules
服务器上面 只需要写的代码 不需要上传
node_modules

##cookie
###客户端的
js 操作: document.cookie 

###服务器端
Set-Cookie: name=myy; path=/user; httponly

###内容:
name:
value:
path: 规定 cookie 生效的路径
  /               所有的路径
  /user           /user 及子路径
  /user/XXX       /user/XXX 及子路径
httpOnly: 
  true 不能通过js访问 
  false 能通过js访问 
max-age:在几秒之后失效

###作用范围
path 
  浏览器检查所有存储的 cookie ,把符合当前作用范围的cookie 放在http请求头发给服务器
  cookie有可能被用户禁用
domain
  会话状态管理,保存用户个性化设置

##session
保存在服务端的
靠后台语言实现,
有很多个session
很多个用户 sessionID



##koa 第三方中间件
ctx req+res
往ctx 上面扩展 80%
ctx:{
  req,
  res,
}
koa-views ejs
ctx:{
  req,
  res,
  render:()=>{}
}
调用 提供的 render()



##localStorage sessionStorage cookie session