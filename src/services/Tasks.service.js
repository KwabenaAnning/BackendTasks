const {  createTasks, fetchTasksById, fetchAllTAsks,   fetchTaskByUser,editTask,updateUserTask } = require('../queries/tasks');
const {runQuery} = require('../config/database.config');

/**
 * Create Task
 */

   /**
 * Creates a new post in the db
 * @param {object} body
 * @param {number} id
 * @returns {Response}
 */

const createNewTasks = async (body, id) => {
    const { title, description, completed, user_id } = body;
    const tasks = await runQuery(createTasks, [title, description, completed, user_id]);
    return {
        code: 201,
        status: 'success',
        message: 'task created successfully!',
        data: {
        tasks,
      },
    };
  };
 
  const fetchTAsks = async () => {
    const result = await runQuery(fetchAllTAsks);
    return {
      status: 'success',
      message: 'Tasks fetched successfully!',
      code: 200,
      data: {
        result,
      },
    };
  };


  const getTaskByUser = async (user_id) => {
    const result = await runQuery(  fetchTaskByUser, [user_id]);
    return {
        code: 200,
        status: 'success',
        message: 'Single task fetched successfully',
        data: {
            result,
        },
    };
}

const retrieveSingleTask = async (id) => {
    const result = await runQuery(fetchTasksById, [id]);
    return {
        code: 200,
        status: 'success',
        message: 'Single tasks fetched successfully',
        data: result[0]
    }
}




/**
 * Edits a post
 * @param {string} title 
 * @param {string} description 
 * @param {number} id 
 * @returns {Response}
 */
const editingTask = async (title, description, id) => {
    const result = await runQuery(editTask, [title, description, id]);
    return {
      status: 'success',
      message: 'Tasks edited successfully!',
      code: 200,
      data: {
        result,
      },
    };
}

const UpdateTask = async (body) => {
    const { completed, id } = body; 

    // Check if tasks completed
    const tasks = await runQuery(updateUserTask, [title])
    if (tasks.length === 0) {
        throw {
            code: 409,
            status: 'error',
            message: '"There are still some tasks left!"',
            data: null
        }
    }

    // const published_at = new Date();
    const result = await runQuery(updateUserTask, [completed, id,])
    return {
        code: 201,
        status: 'success',
        message: 'Completes successfully',
        data: result[0]
    }
}


module.exports = {
    retrieveSingleTask,
    createNewTasks,
    fetchTAsks,
    getTaskByUser,
    editingTask
};
