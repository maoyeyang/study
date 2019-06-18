const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry:'./src/index',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: [path.resolve(__dirname, 'src')],
            use: 'babel-loader'
        },{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback:'style-loader',
                use:[
                    'css-loader'
                ]
            })
        }]
    },
    resolve: {
        alias: {
            log$: path.resolve(__dirname, 'src/utils/log.js')
        },
        extensions: ['.js','.css']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new ExtractTextPlugin('[name].css')
    ]
}