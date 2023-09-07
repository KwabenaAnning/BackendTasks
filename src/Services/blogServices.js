// create the blog function here. 
// This starts the whole process of blogging. In that it acquires data from the database

const blogPost =[]

const createPost = async (post) => {
    const postExist = blogPost.find((Element) => Element.post === post)
    // this line is checking if there is a post like this we have used before going ahead with pushing the new post
    // this i can say is for security wise and to prevent duplicate posts 
     if (postExist){
        return{
            status: 'error',
            Code: 409,
            Message: 'Post exist already. Check and repost',
            data: null
        }
     }

    //  Here, we are not using the else statement because ES6 provides us that option to just go ahead with creating out next function
    blogPost.push(post);
    // After checking the existence in the database, we are pushing the post on line 7 (Element.post = post) into the array const blogPost=[]
    return{
        status: 'successful',
        Code:201,
        Message: 'Post now added successfully. Check to confirm',
        data: post
        // the data is the post because that was what we are about to post but had to check the existence first.
    }
}

const getPost = async () =>{
    return {
        status: 'successful',
        code:201,
        Message: 'post acquired positively and successfully',
        data: blogPost
    }
}

// blogServices.js

// const updatePost = async (postId, updatedData) => {
//     const existingPostIndex = blogPost.findIndex((post) => post.id === postId);

//     if (existingPostIndex === -1) {
//         return {
//             status: 'error',
//             code: 404,
//             Message: 'Post not found',
//             data: null
//         };
//     }

//     // Update the existing post with new data
//     blogPost[existingPostIndex] = { ...blogPost[existingPostIndex], ...updatedData };

//     return {
//         status: 'successful',
//         code: 201,
//         Message: 'Post updated successfully',
//         data: blogPost[existingPostIndex]
//     };
// };

// Update a blog post by ID
const updatePost = async (postId, updatedPost) => {
    // Check if the post exists
    const postIndex = blogPost.findIndex((element) => element.id === postId);
    if (postIndex !== -1) {
        return {
            status: 'error',
            code: 404,
            message: 'Post not found',
            data: null
        };
    } else {
        // Update the post with the new data
        blogPost[postIndex] = { ...blogPost[postIndex], ...updatedPost };
        return {
            status: 'success',
            code: 200,
            message: 'Post updated successfully',
            data: blogPost[postIndex]
        };
    }
};


const deletePost = async (postId) => {
    const postIndex = blogPost.findIndex((element) => element.id === postId);

    if (postIndex === -1) {
        return {
            status: 'error',
            code: 404,
            message: 'Post not found',
            data: null
        };
    }

    // Remove the post from the array
    const deletedPost = blogPost.splice(postIndex, 1)[0];

    return {
        status: 'success',
        code: 200,
        message: 'Post deleted successfully',
        data: deletedPost
    };
};

module.exports = {
    createPost,
    getPost,
    updatePost,
    deletePost // Add this line to export the deletePost function
};


// module.exports = {
//      createPost,getPost
// }

// next step is to move to the blog.controller

