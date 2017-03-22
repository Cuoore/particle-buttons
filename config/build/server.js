const path = require('path')

const PATHS = require('./paths')

const DEVELOPMENT = {
    publicPath:         path.join(path.normalize(__dirname + '/../..') , "src"),
    contentBase:        path.join(path.normalize(__dirname + '/../..') , "src"),
    historyApiFallback: true,
    inline:             true,
    stats:              "errors-only",
    clientLogLevel:     'error',
}

const SERVER = {
  DEVELOPMENT: DEVELOPMENT,
}

module.exports = SERVER;