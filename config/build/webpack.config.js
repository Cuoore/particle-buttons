const path = require('path')

const COMPONENT = require('./component')
const LIBRARY = require('./library')
const PLUGINS = require('./plugins')
const PATHS = require('./paths')
const RULES = require('./rules')
const SERVER = require('./server')

module.exports = env => {
    return {
        context: path.resolve(__dirname, PATHS.CONTEXT + PATHS.SRC),
        entry: {
            [COMPONENT.NAME]: './' + COMPONENT.NAME + '.js',
        },
        output: {
            filename: LIBRARY.PREFIX + "[name].[hash].js",
            path: path.resolve(__dirname, PATHS.CONTEXT + PATHS.DIST),
            publicPath: './',
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
}
