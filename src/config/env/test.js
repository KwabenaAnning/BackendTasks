const dotenv = require('dotenv')

dotenv.config()

const test = {
   DATABASE_URL: process.env.TEST_DATABASE_URL,
   SERVER_PORT: process.env.PORT,

}

module.exports = test;