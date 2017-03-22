const PLUGINS = require('./plugins');

const POSTCSS = {
    test: /\.css$/,
    loader: PLUGINS.EXTRACT_TEXT_PLUGIN.extract({
        loader: 'css-loader?importLoaders=1!postcss-loader'
    })
};

const LOADERS = {
    POSTCSS: POSTCSS,
}

module.exports = LOADERS