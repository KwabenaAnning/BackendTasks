const dotenv = require('dotenv')

dotenv.config()

const production = {
   DATABASE_URL: process.env.PROD_DATABSE_URL,
   SERVER_PORT: process.env.PORT,

}

module.exports = production;