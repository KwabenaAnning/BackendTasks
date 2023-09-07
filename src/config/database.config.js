const {Pool} = require('pg');
const config = require('./env/index')

const connectionString = config.DATABASE_URL;
const pool = new Pool ({connectionString});


// this is to check for successful connection
(() => {
    pool.query('SELECT NOW()', (err, res) =>{
      if (err)
      console.log('Databse connection Failed!', err);
      if (res) console.log ('Connected to PostgresQL Databse');
    });

})()

const runQuery =async (query, value =[]) =>{
    const {rows} = await pool.query(query, values);
    return rows;
};

module.exports = {runQuery};

