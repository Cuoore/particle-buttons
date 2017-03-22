const POSTCSS_CONFIG = require('./postcss-config')

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const POSTCSS =  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: 'css-loader',
    })
}

const RULES = {
    POSTCSS: POSTCSS,
}

module.exports = RULES;