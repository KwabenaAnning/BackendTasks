const {  createTasks, fetchTasksById, fetchAllTAsks,   fetchTaskByUser,editTask } = require('../queries/tasks');
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
    const post = await runQuery(createTasks, [title, description, completed, user_id]);
    return {
        code: 201,
        status: 'success',
        message: 'Post created successfully!',
        data: {
        post,
      },
    };
  };
 
  const fetchTAsks = async () => {
    const result = await runQuery(fetchAllTAsks);
    return {
      status: 'success',
      message: 'Posts fetched successfully!',
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
        message: 'Single book fetched successfully',
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
        message: 'Single book fetched successfully',
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
      message: 'Posts edited successfully!',
      code: 200,
      data: {
        result,
      },
    };
}


module.exports = {
    retrieveSingleTask,
    createNewTasks,
    fetchTAsks,
    getTaskByUser,
    editingTask
};
