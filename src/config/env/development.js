const dotenv = require('dotenv')
dotenv.config()

const development = {
   DATABASE_URL: process.env.DEV_DATABSE_URL,
   SERVER_PORT: process.env.PORT

}

module.exports = development;