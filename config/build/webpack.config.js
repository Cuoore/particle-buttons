const path = require('path')

const COMPONENT = require('./component')
const LIBRARY = require('./library')
const PLUGINS = require('./plugins')
const PATHS = require('./paths')
const RULES = require('./rules')
const SERVER = require('./server')
const ENVIROMENT = require('./enviroment');

const CONFIG = {
    entry: [
        path.resolve(__dirname, PATHS.CONTEXT + PATHS.SRC + '/' + COMPONENT.NAME + '.js'),
    ],
    output: {
        filename: LIBRARY.PREFIX + "[name].[hash].js",
        path: path.resolve(__dirname, PATHS.CONTEXT + PATHS.DIST),
    },
    plugins: [
        PLUGINS.HTML_WEBPACK,
        PLUGINS.EXTRACT_TEXT_PLUGIN,
    ],
    module: {
        rules: [
            RULES.POSTCSS,
        ],
    },
    resolve: {
        alias: {
            dependencies: path.resolve(__dirname, PATHS.CONTEXT + PATHS.DEPENDENCIES),
        }
    },
    devServer: SERVER.DEVELOPMENT
}

if (ENVIROMENT.DEVELOPMENT){
    delete CONFIG.output.path
    CONFIG.devtool = 'source-map';
    CONFIG.entry.unshift('webpack-dev-server/client?http://localhost:8080/');
    CONFIG.plugins.unshift(PLUGINS.HOT_MODULE_REPLACEMENT);
}

if (ENVIROMENT.PRODUCTION){
    delete CONFIG.output.publicPath
    delete CONFIG.devServer
}

module.exports = CONFIG