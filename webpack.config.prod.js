var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
module.exports = {
    devtool: 'cheap-module-source-map',
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/bundle.js?v=' + Math.random(),
        publicPath: './' // http://s.wx.tarh5.cn/darksear/
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false,
            compressor: {
                warnings: false,
            },
        }),
        new ExtractTextPlugin('css/[name].css?v='+Math.random()),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader', {
                publicPath: '../'
            })
        }, , {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader', {
                publicPath: '../'
            })
        }, {
            test: /\.html$/,
            exclude: /node_modules/,
            loader: "html-withimg-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
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
    postcss:[autoprefixer({browsers:['last 5 versions']})]
}