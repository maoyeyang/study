## 静态资源
不会随着服务运行而改变的内容: html css js 图片
1.如果 有index.html 打开
2.否则 列出所有文件
3.请求路径 和磁盘路径 一一 映射

请求:
/static/*.* 磁盘位置static目录 一一对应
1.拿到 req.url
2.读取 磁盘下同一个位置 返回
3.静态资源 通常会放在某一个目录下面 /static/ 所以请求都以某个目录开头

##打开方式
file:// 本地文件的读取协议    ./xx.png  ok
http://127.0.0.1:8080/  http协议
html 里面引入的资源   都会发出请求


##上传图片 

### formidable
处理请求的
fileds 非 input[type='file']的提交项 
files input[type='file']的提交项
根据 input 的 name 属性 来获取值

