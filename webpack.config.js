var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); // creates an index.html for us and puts it in the dist folder

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module:{
        rules: [
            { test: /\.(js)$/, use: 'babel-loader'}, // javascript files are run through babel-loader
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'app/index.html'
    })]
};