const {retrieveSingleTask, createNewTasks, fetchTAsks, getTaskByUser,editingTask} = require ('../services/Tasks.service');


/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {object} next 
 * @returns {JSON | Error}
 */

const  createATask= async (req, res, next) => {
    try {
      const { id } = req.user;
      const response = await createNewTasks(req.body, id);
      return res.status(response.code).json(response);
    } catch (error) {
      return next(error);
    }
  };

  const fetchAsingleTask = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await retrieveSingleTask(id);
        return res.status(result.code).json(result)
    } catch (error) {
        next(error)
    }
}

/**
 * 
 * @param {request} req 
 * @param {response} res 
 * @param {object} next 
 * @returns  {JSON | error}
 */

const fetchEveryTask = async (req, res, next) => {
    try {
        const result = await fetchTAsks();
        return res.status(result.code).json(result);
    } catch (error) {
       return next(error);
    }
}

const getTasksOfUser = async (req, res, next) => {
    try {
        const result = await getTaskByUser();
        return res.status(result.code).json(result);
    } catch (error) {
       return next(error);
    }
}

const  editTheTask= async (req, res, next) => {
    try {
      const { title, description } = req.body;
      const { id } = req.user;
      const response = await editingTask(title, description, id);
      return res.status(response.code).json(response);
    } catch (error) {
      return next(error);
    }
  };




module.exports ={
    createATask,
    fetchAsingleTask,
    fetchEveryTask,
    getTasksOfUser,
    editTheTask
};


