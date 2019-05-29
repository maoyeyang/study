const http = require('http')
const formidable= require('formidable')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf8'
  })
  if(req.url=='/upload' && req.method.toLowerCase()=='post'){
    const form = new formidable.IncomingForm()
    form.uploadDir = './static/'
    form.parse(req,(err,fields,files)=>{
      console.log(fields,files)
      const oldPath = files.upload.path
      const filename = files.upload.name
      const dirname = path.dirname(oldPath)
      const newPath = path.join(dirname,filename)
      fs.rename(oldPath,newPath,(err)=>{
        res.end('文件上传完毕')
      })
    })
    return false
  }
    res.end(
      `
      <form action="/upload" method ="POST" enctype="multipart/form-data">
        <input type="file" name="upload" id="">   
        <input type="text" name="nickname" id=""> 
        <input type="submit" value="Submit" >
      </form>
      `
    )
  })
  .listen(8080, () => {
    console.log('Running......')
  })