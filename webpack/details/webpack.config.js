var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')

module.exports = {
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
    })],
    devServer: {
        port: '1314',
        open:true
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            use: ['babel-loader']
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, ],
    },
    resolve: {
        extensions: ['.js','.css'],
        modules: [
            path.resolve(__dirname, 'node_modules')
        ]
    }
};