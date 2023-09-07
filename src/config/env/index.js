const development = require('./src/config/env/development')
const test = require('./src/config/env/test')
const production = require('./src/config/env/production')

const environment = {
  development,
  test,
  production
}

module.exports= environment[process.env.NODE_ENV || 'development'];

