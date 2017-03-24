const ENVIROMENT = {
    PRODUCTION: process.env.NODE_ENV === 'production',
    DEVELOPMENT: process.env.NODE_ENV !== 'production',
}

module.exports = ENVIROMENT