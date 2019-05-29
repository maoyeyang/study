const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
  if(/^\/static\//.test(req.url)){
    staticServer(req,res)
    return false
  }
  // fs.readFile('./static/index.html','binary',(err,file)=>{
  //   res.write(file,'binary')
  //   res.end();
  // })
})
.listen(8080,()=>{
  console.log('Running.....')
})

function staticServer(req,res){
  let url = req.url
  if(url ==='/static/'){
    url = url+'index.html' 
  }
  const filePath = path.join(__dirname,url)
  
  fs.exists(filePath,exists=>{
    if(!exists){
      res.end(`The request url : ${url} was not found`)
    }else{
      fs.readFile(filePath,'binary',(err,file)=>{
        if(!err){
          res.write(file,'binary')
          res.end()
        }
      })
    }
  })
}