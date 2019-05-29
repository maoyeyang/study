const request = require('request')
const cheerio = require('cheerio')

request('https://www.smzdm.com/youhui/',(err,res)=>{
    if(!err){
        const $ = cheerio.load(res.body,{
            decodeEntities:false
        })
        $('.list.list_preferential').each(function () {
            let title = $('.itemName a',this).html()
            title = title.replace(/<.*>.*<\/.*>/g,'')
            const price = $('.listTitle .red',this).text() 
            const img = $('.picLeft img',this).attr('src')
            const text = $('.lrInfo strong',this).text().trim()
            console.log({
                title,price,img,text
            })
          })
    }
})