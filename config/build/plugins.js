const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpack = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const COMPONENT = require('./component')
const LIBRARY = require('./library')
const PATHS = require('./paths')

const htmlWebpackPlugin = new HtmlWebpack({
    template: path.join(__dirname, PATHS.CONTEXT + PATHS.SRC + '/index.html'),
    filename: LIBRARY.PREFIX + COMPONENT.NAME + '.html',
    inject: 'body',
});

const extractTextPlugin = new ExtractTextPlugin(LIBRARY.PREFIX + '[name].[hash].css');

const PLUGINS = {
    HTML_WEBPACK: htmlWebpackPlugin,
    EXTRACT_TEXT_PLUGIN: extractTextPlugin
}

module.exports = PLUGINS