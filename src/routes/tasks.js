const express = require('express');
const { createATask, fetchAsingleTask, fetchEveryTask,getTasksOfUser, editTheTask } = require('../controllers/tasks.controller');
const { checkToken } = require('../middlewares/auth.middleware');
const { checkIfIdExists } = require('../middlewares/user.middleware');
const { checkValidPost } = require('../middlewares/tasks.middleware');
const { checkTAskInput } = require('../middlewares/validation.middleware');

const router = express.Router();

router.post('/', checkToken,createATask);
router.get('/:id', fetchAsingleTask);
router.get('/', fetchEveryTask);
router.get('/user_id', checkIfIdExists, getTasksOfUser);
router.put('/:id', checkToken,checkTAskInput, checkValidPost, editTheTask);
module.exports = router

