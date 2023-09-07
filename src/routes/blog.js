const express = require('express')
const Controllers = require ('../controllers/blogController')

const router = express.Router();

router.post('/', Controllers.addPost);
router.get('/', Controllers.getPost);

// module.exports = router;


// blogRoutes.js

// const express = require('express');
// const Controllers = require('../controllers/blogController');
// const router = express.Router();

// Add a new route for updating a post using a PUT request
router.put('/:postId', Controllers.updatePost);
router.delete('/:postId', Controllers.deletePost);


module.exports = router;


