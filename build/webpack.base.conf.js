'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const {VueLoaderPlugin} = require('vue-loader')
const vueLoaderConfig = require('./vue-loader.conf')

<<<<<<< HEAD
function resolve(dir) {
=======
function resolve (dir) {
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
    return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
<<<<<<< HEAD
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [resolve('src'), resolve('test')],
    options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: !config.dev.showEslintErrorsInOverlay
=======
    test : /\.(js|vue)$/,
    loader : 'eslint-loader',
    enforce : 'pre',
    include : [ resolve('src'), resolve('test') ],
    options : {
        formatter : require('eslint-friendly-formatter'),
        emitWarning : !config.dev.showEslintErrorsInOverlay
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
    }
})

module.exports = {
<<<<<<< HEAD
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath :
            config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            // ...(config.dev.useEslint ? [createLintingRule()] : []),
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
=======
    context : path.resolve(__dirname, '../'),
    entry : {
        app : './src/main.js'
    },
    output : {
        path : config.build.assetsRoot,
        filename : '[name].js',
        publicPath : process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath :
            config.dev.assetsPublicPath
    },
    resolve : {
        extensions : [ '.js', '.vue', '.json' ],
        alias : {
            '@' : resolve('src')
        }
    },
    module : {
        rules : [
            // ...(config.dev.useEslint ? [createLintingRule()] : []),
            {
                test : /\.vue$/,
                loader : 'vue-loader',
                options : vueLoaderConfig
            },
            {
                test : /\.js$/,
                loader : 'babel-loader',
                include : [
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
                    resolve('src'),
                    resolve('test'),
                    resolve('node_modules/webpack-dev-server/client')
                ]
            },
            {
<<<<<<< HEAD
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: [resolve('src/icons')],
                options: {
                    symbolId: 'icon-[name]'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                exclude: [resolve('src/icons')],
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
=======
                test : /\.svg$/,
                loader : 'svg-sprite-loader',
                include : [ resolve('src/icons') ],
                options : {
                    symbolId : 'icon-[name]'
                }
            },
            {
                test : /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader : 'url-loader',
                exclude : [ resolve('src/icons') ],
                options : {
                    limit : 10000,
                    name : utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test : /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader : 'url-loader',
                options : {
                    limit : 10000,
                    name : utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test : /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader : 'url-loader',
                options : {
                    limit : 10000,
                    name : utils.assetsPath('fonts/[name].[hash:7].[ext]')
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
                }
            }
        ]
    },
<<<<<<< HEAD
    plugins: [new VueLoaderPlugin()],
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    performance: {
        hints: false
=======
    plugins : [ new VueLoaderPlugin() ],
    node : {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate : false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram : 'empty',
        fs : 'empty',
        net : 'empty',
        tls : 'empty',
        child_process : 'empty'
    },
    performance : {
        hints : false
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
    }
}
