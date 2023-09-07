
// imports database config

require ('./src/config/database.config')

const express = require('express')
const apiVersion1 =require('./src/config/env/versioning/vsj1')
const envConfig = require('./src/config/env/index')

const blogs = require('./src/routes/blog')

const server = express();

server.use(express.json());  // serves as a fromat for sending and recieving information(data)

// port is an important part of the URL when creating APIs so add it always 
const PORT =envConfig.SERVER_PORT ||9000;
server.listen(PORT, () =>{
console.log(`My application is running on ${PORT}`)
})

server.use ('api/vsj1', apiVersion1);
// server.use ('api/vsj1', apiVersion1)
server.use('/blog', blogs) 
//  guides you the system to jnow the place or path where the url us acquiring the data from.

module.exports= server;
