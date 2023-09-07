const services = require('../Services/blogServices')


const addPost = async(req, res, next) => {
    // the addPost is fro the create post. after the creation we want to add it hence, addPost
    try{
        const post = await services.createPost(req.body);
        // The line above means that we set a variable 'post' to await the the createPost i.e the post we are creating 
       return res.status(post.Code).json(post)
    //    return the results inside the status showing the code 
    } catch(error){
        // catch always is for errors or let me say negatives when the former does not pass then the error will pass
    next(error)
}
}

const getPost = async (req, res, next) => {
     try{
        const posts = await services.getPost(); /*posts is just a vsriable has no link with the other post*/
        return res.status(posts.code).json(posts)
     } catch (error){
        next(error)
     }
}

// module.exports = {
//     addPost,getPost
//     // we are exporting the addPost and the getPost to to the routes now
// }


// blogController.js

// const services = require('../Services/blogServices');

// const updatePost = async (req, res, next) => {
//     const postId = req.params.postId;
//     const updatedData = req.body;

//     try {
//         const result = await services.updatePost(postId, updatedData);
//         return res.status(result.code).json(result);
//     } catch (error) {
//         next(error);
//     }
// };

const updatePost = async (req, res, next) => {
    try {
        const postId = req.params.postId; // Assuming the post ID is provided in the URL
        const updatedPost = req.body; // Assuming the updated post data is sent in the request body

        const result = await services.updatePost(postId, updatedPost);

        return res.status(result.code).json(result);
    } catch (error) {
        next(error);
    }
};


const deletePost = async (req, res, next) => {
    try {
        const postId = req.params.postId; // Assuming the post ID is provided in the URL

        const result = await services.deletePost(postId);

        if (result.status === 'success') {
            return res.status(result.code).json(result);
        } else {
            return res.status(result.code).json(result);
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    addPost,
    getPost,
    updatePost,
    deletePost
};


// const deletePost = async (req, res, next) => {
//     try {
//         const postId = req.params.postId; // Assuming the post ID is provided in the URL

//         const result = await services.deletePost(postId);

//         return res.status(result.code).json(result);
//     } catch (error) {
//         next(error);
//     }
// };

// module.exports = {
//     addPost,
//     getPost,
//     updatePost,
//     deletePost // Add this line to export the deletePost function
// };


