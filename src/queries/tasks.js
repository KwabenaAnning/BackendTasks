// creating tasks

const createTasks = `
INSERT INTO tasks(
    title,
    description,
    completed,
    user_id
)
VALUES ($1, $2, $3, $4) RETURNING id, title, description, completed, user_id, created_at
`;

const fetchTasksById = `SELECT user_id FROM tasks WHERE id=$1`;

const fetchAllTAsks = `
SELECT t.id, t.title, t.description, 
json_build_object(
    'id', u.id,
    'email', u.email
) as user
FROM tasks t
INNER JOIN users u on t.user_id = u.id
`;

const fetchTaskByUser = `
SELECT id, title, description FROM tasks WHERE user_id=$1
`;

const editTask = `
UPDATE Tasks
SET title=$1, description=$2
WHERE tasks=$3
RETURNING *
`;

const updateUserTask = `
  UPDATE tasks
  SET completed = $1
  WHERE id = $2
`;

module.exports ={
    createTasks,
    fetchTasksById,
    fetchAllTAsks,
    fetchTaskByUser,
    editTask,
    updateUserTask
};
