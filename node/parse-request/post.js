const http = require('http')
const userLists = [{
    name: 1
}, {
    name: 2
}]
http.createServer((req, res) => {
    const method = req.method
    const url = req.url
    let data = '';
    req.on('data', (chunk) => {
        data += chunk
    })
    req.on('end', () => {
        res.end(data)
    })
    // if (method.toLowerCase() === 'post' && url === '/user/lists') {
    //     res.writeHead(200,{
    //         "Content-Type":'application/json'
    //     })
    //     res.end(JSON.stringify(userLists))
    // }
    // res.end("aaaa")
}).listen(8080, () => {
    console.log('Running......')
})