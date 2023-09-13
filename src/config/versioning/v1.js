const express = require('express');
const api = express.Router()
const users = require('../../routes/user')
const task = require('../../routes/tasks')

api.get("/", (req, res) => res.status(200).json({
    status: 'success',
    message: 'Welcome User to your tasks API'
}))

api.use("/users", users);
api.use("/tasks", task);

module.exports = api