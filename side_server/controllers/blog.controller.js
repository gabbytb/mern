const db = require("../models");
const Blog = db.blogs;
const jwt = require("jsonwebtoken");









// Create New Blog Post
exports.create = async (req, res) => {

    const { post_title, post_description, post_author, post_tags, post_categories, isPublished=true } = req.body;
    
    try {   
        // FORM VALIDATION:  If any of these fields, is missing in the payload, display 'errMsg' !!!!
        if (!( post_title && post_description && post_author )) {
            const errMsg = res.status(200).send('Fill all the required inputs');
            console.log("Fill all the required inputs: ", errMsg);
            return;
        }          

        const postExists = await Blog.findOne({ post_title: post_title.toLowerCase() });    
        if (postExists) {
            const postExistsMsg = res.status(200).send('Article exists');
            console.log("Article exists: ", postExistsMsg);
            return;
        } else {
            const blog = new Blog({
                post_title: post_title.toLowerCase(),    // sanitize: convert email to lowercase
                post_description,
                post_author,
                post_tags,
                post_categories,
                isPublished,
            });

            // const token_key = process.env.TOKEN_KEY
            // const generatedToken = token_key || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1c2VyX2lkIjoiNjU0MjQzNDFhY2FiZWM5YjdhYTI4YzZiIiwiaWF0IjoxNjpgstre";
            // const token = jwt.sign({blog_Id: blog._id, post_title}, generatedToken, { expiresIn: "2h" });
            // blog.token = token;

            blog.save(blog, (err) => {
                if (err) {
                    console.error(`Error encountered when saving USER: `, err);
                } else {
                    // console.log("*********************************************************");
                    // console.log("***  NEW: BLOG POST SAVED SUCCESSFULLY: Post Details  ***");
                    // console.log("*********************************************************");
                    // console.log("Post ID: ", blog._id);
                    // console.log("Post Title: ", blog.post_title);
                    // console.log("Post Description: ", blog.post_description);
                    // console.log("Post Author: ", blog.post_author);
                    // console.log("Post Tags: ", blog.post_tags);
                    // console.log("Post Categories: ", blog.post_categories);
                    // console.log("Post isPublished: ", blog.isPublished);
                    // console.log("Token Generated for Post: ", blog.token);
                    // console.log("*********************************************************");
                    // console.log("*********************************************************");
                    console.log(`\n*********************************************************\n*****   NEW: BLOG POST SAVED SUCCESSFULLY: Post Details   ***** \n********************************************************* \n ${blog} \n*********************************************************\n*********************************************************`);
                }
            });

            res.status(201).json(blog);
            return;
        }
    } catch (err) {      
        const errPost = res.status(500).send(`Failed to save new blog post: ${err}`);
        console.log("Error Caught while creating new blog post: ", errPost);
        return;
    }
};








// Find All Blog Posts
exports.findAllPosts = async (req, res) => {
    try {
        const allPosts = await Blog.find({ });
        return res.status(200).json(allPosts);
    } catch (error) {
        return res.status(500).send(`Some error occurred while retrieving posts: ${error}`);
    }
};






// Find Blog Post By Id
exports.findBlogById = async (req, res) => {
    const id = req.params._id;
    try{
        //  The response body(i.e postId) will contain the user document.
        //  NOTE:  This is a query operation:- Blog.findById();
        const postId = Blog.findById(id)
        if (postId) {
            return res.status(200).json(postId);
        } else {
            return res.status(404).json({ message: `Blog Post with ID: ${id} not found` });
        }
    } catch (error) {
        return res.status(500).json({ message: `Error retrieving Blog Post with ID ${id}`, error });
    }
};






// Find All isPublished Blog Posts
exports.findAllPublished = async (req, res) => {
    try {
        const allPublishedPosts = await Blog.find({ isPublished: true });
        return res.status(200).json(allPublishedPosts);
    } catch(error) {
        return res.status(500).json({ message: 'Error updating post', error });
    }
};






// Update Blog Post Information
exports.updateBlog = async (req, res) => {
    const { post_title } = req.body;
    const dataToUpdate = { post_title };

    try {
        // Find Post by "Post-Title"
        const updatedPost = await Blog.findOneAndUpdate({ post_title }, dataToUpdate, { new: true });
        if (updatedPost) {

            // Post updated successfully
            res.status(200).json({ message: 'Post updated successfully', updatedPost });
            console.log('\n', "EXISTING POST: ", updatedPost.post_title + " was updated!", '\n', "EXISITNG POST UPDATED: ", updatedPost);
            return;
        } else {
            // Post not found
            return res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        // Catch error
        return res.status(500).json({ message: 'Error updating post', error });
    }
};







// Delete the Blog Post with the Specified 'id' in the request
exports.deleteBlog = async (req, res) => {
    const id = req.params._id;
    try{
        const postId = Blog.findByIdAndRemove(id, { useFindAndModify: false })
        if (!(postId)) {
            return res.status(404).json({ message: `Cannot delete Blog Post with ID = ${id}. Post was not found!` });
        } else {
            return res.status(200).json({ message: "Blog Post deleted successfully!", postId});
        }
    } catch (error) {
        return res.status(500).json({ message: `Could not delete Blog Post with ID = ${id}`, err });
    }
};






// Delete all Blog Posts
exports.deleteAllBlogs = (req, res) => {
    try{
        const blogPosts = Blog.deleteMany({});
        if (!blogPosts) {
            return res.status(404).json({ message: "Failed to execute action!" });
        } else {
            return res.status(200).json({ message: `${blogPosts.deletedCount} All Blog Posts was deleted successfully!`});
        }
    } catch (error) {
        return res.status(500).json({ message: error.message || "Some error occurred while removing all Blog Posts."});
    }
};



