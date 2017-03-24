const path = require('path')

const PATHS = require('./paths')

const DEVELOPMENT = {
    contentBase: path.resolve(__dirname, PATHS.CONTEXT),
    historyApiFallback: true,
    hot: true,
    stats: "errors-only",
    clientLogLevel: 'error',
}

const SERVER = {
  DEVELOPMENT: DEVELOPMENT,
}

module.exports = SERVER;