无编译,不代码 
webpack 已经成为工作流程的霸主

vue-cli
编译过程 和 js的promise 
异步
1.代码写在 dev中    src/
2.上线在 build 中 dist/
3.启动 web 服务器 webpack-dev-server

webpack (html-webpack-plugin)

log 不在根目录下 怎么找到他呢 多写地址好吗  ./utils/log

#alias  路径的缩写 

resolve -> .js -> module -> rules -> babel-loader

babel-core babel-cli babel-preset-env 
babel-loader 有点兼容性
module
    rules:[{
        test:/\.js$/,
        use:'babel-loader'
    }]
    resolve:{
        extensions:['.js']
    }

8080  webpack-dev-server html-webpack-plugin
template ./src/index.html

webpack 一切皆可打包  打包到js里
css对于 js 来说就是个文本
img 对于 js 打包成base64的格式

但是 css应该独立打包,性能优化的需要
main.js 显示是最慢的