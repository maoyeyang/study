exports.login = async (req, res) => {
  const msg = req.checkBody({
    username: {
      required: '用户名不能为空'
    },
    password: {
      required: '密码不能为空'
    },
    code: {
      required: '验证码不能为空'
    }
  })

  if (msg) {
    return res.handleError(msg)
  }
  res.json({
    page: '登录'
  })
}