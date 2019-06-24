# fullstack 全栈

Front Enginner
Backend /API

restful api
浏览器与服务器通信方式的一种接口的设计风格

- 在 restful 的世界里 ,一切皆资源
- url 来唯一定位资源的识别符
  - /posts/:id/comments
- 加一条 comment 怎么办? /comments/2
  {
  id:2,
  body:'好气',
  postId:1
  }
  /comments 设计好 URL POST
- 设计有意义的 URL
  资源 状态改变
  POST /comments 加一条评论 id:2
  修改一下内容
  /comments/2 body:'最美不过下雨天'
  | 操作 | SQL 方法 | HTTP 动词
  - | - | -
    | CREATE | INSERT | POST
    | READ | SELECT | GET
    | UPDATE | UPDATE | PUT/PATCH
    | DELETE | DELETE | DELETE

状态 切换 使用定义的谓语动词

PUT {body:'',post:1}
PATCH {body:''}
