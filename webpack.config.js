var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, './');

module.exports = {
    mode: 'development',
    
    resolve: {
        extensions: ['.js', '.jsx','.css']
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: 'babel-loader'
            },
            {
                test: /\.less$/,
                loaders: ["style-loader", "css-loader", "less-loader"]
            }, 
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            }
            
        ]
    },
    
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    output: {
                path: parentDir + '/dist',
                filename: 'bundle.js'
            },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}