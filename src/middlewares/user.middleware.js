// check if the user account exists 
const { runQuery } = require('../config/database.config');
const { fetchUserById } = require('../queries/user');

const checkIfIdExists = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const [user = null] = await runQuery(fetchUserById, [user_id]);
    if (!user) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'User does not exist',
        data: null,
      });
    }
    console.log({ user })
    req.user = user;
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  checkIfIdExists,
};
