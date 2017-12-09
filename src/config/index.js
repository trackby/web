/* eslint-disable global-require */
module.exports = process.env.NODE_ENV === 'production' ? require('./prod') : require('./dev')
