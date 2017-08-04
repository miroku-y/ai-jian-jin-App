var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:2222',
        'webpack/hot/dev-server',
        'whatwg-fetch',
        'babel-polyfill',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/bundle.js'
       
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css'),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.json$/,
            exclude: /node_modules/,
            loader: 'json-loader'
        },{
            test: /\.css$/,
            // exclude: /node_modules/,
            loader: ExtractTextPlugin.extract('style', 'css!postcss', {
                publicPath: '../'
            })
        }, {
            test: /\.less$/,
            // exclude: /node_modules/, 
            loader: ExtractTextPlugin.extract("style", "css!postcss!less", {
                publicPath: '../'
            })
        }, {
            test: /\.html$/,
            loader: "html-withimg-loader?minimize=false" // loaders: ['raw-loader'] is also perfectly acceptable.
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, { 
            test: /\.(png|jpg|gif)$/, 
            exclude: /node_modules/, 
            loaders: [
                'url-loader?limit=8192&name=images/[name]-[hash].[ext]',
                'image-webpack-loader'
            ]
        }] 
    },
    postcss:[autoprefixer({browsers:['last 5 versions']})],
    devServer: {
        contentBase: './dist',  // 这样配置解决了css和img的图片路径问题
        disableHostCheck: true,
        hot: true
    }
}