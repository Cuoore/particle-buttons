const Webpack = require('webpack')
const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
 
const COMPONENT = require('./component')
const LIBRARY = require('./library')
const PATHS = require('./paths')
const ENVIROMENT = require('./enviroment');

let htmlWebpackPluginConfig = {
    template: path.join(__dirname, PATHS.CONTEXT + PATHS.SRC + '/index.html'),
    filename: LIBRARY.PREFIX + COMPONENT.NAME + '.html',
    title: LIBRARY.PREFIX + COMPONENT.NAME,
    inject: 'body',
}

let extractTextPluginConfig = LIBRARY.PREFIX + '[name].[hash].css'

if (ENVIROMENT.DEVELOPMENT){
    htmlWebpackPluginConfig.filename = 'index.html'
    extractTextPluginConfig = LIBRARY.PREFIX + '[name].css'
}

const htmlWebpackPlugin = new HtmlWebpackPlugin(htmlWebpackPluginConfig);

const extractTextPlugin = new ExtractTextPlugin(extractTextPluginConfig);

const hotModuleReplacementPlugin = new Webpack.HotModuleReplacementPlugin();

const PLUGINS = {
    HTML_WEBPACK: htmlWebpackPlugin,
    EXTRACT_TEXT_PLUGIN: extractTextPlugin,
    HOT_MODULE_REPLACEMENT: hotModuleReplacementPlugin,
}

module.exports = PLUGINS