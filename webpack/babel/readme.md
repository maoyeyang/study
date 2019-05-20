
#生产线 Webpack 代码生产工艺   工作流 Work Flow

    html+css+js= development
    html template{{}}
    css stylus
    js es6,7,8,9=>es5

    最后代码运行的环境(浏览器)

 - js版本
    babel
    使用最新的技术来开发,babel 编译成es5
    .babelrc
    babel的配置文件

 - babel-core  核心的转译库
    npm run build "babel ...."
    babel-cli
    babel-preset-env .babelrc
    {
        "presets":["env"]
    }

    build
    dev

    `yarn add babel-care babel-cli`
    
    `yarn add babel-plugin-transform-object-rest-spread`

 - preset 预处理
    env 搞不定 安装插件
    风格验证

    `yarn add eslint`
    `npm run eslint`

    `"scripts": {
        "build": "babel index.js -o babel-compiled.js",
        "eslint": "eslint test.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    }`

 - Webpack
    `yarn add webpack webpack-cli webpack-dev-server`

    `yarn global add webpack webpack-cli webpack-dev-server`

    webpack 是一切工作流的主宰

    `webpack --mode development`

    /src 这就是开发目录
    /dist 上线项目 将dist目录打包上线
    /dist/mian.js   没有降级

    需要使用babel

    `webpack --mode production`

 - 开发时写代码 development 强调代码的可读性    dev 本地 localhost
 - 上线时写代码 production 强调代码的大小(要压缩,要混淆) 要build 服务器上 域名
 - 测试时写代码 test 局域网