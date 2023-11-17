const db = require("../models");
const Post = db.post;
// const jwt = require("jsonwebtoken");









// Create New User
exports.createPost = async (req, res) => {

    const {page_title, page_description, author, tags, categories, isActive} = req.body;
    
    try {           
        const post = new Post({
            page_title,
            page_description,
            author,
            tags: tags.toLowerCase(),           // sanitize: convert email to lowercase
            categories,   
            isActive,            
        });

        post.save(post, (err) => {
            if (err) {
                console.error(`Error encountered when saving New Blog Post: `, err);
            } else {
                // console.log("*********************************************************");
                // console.log("***** USER ACCOUNT SUCCESSFULLY SAVED: User Details *****");
                // console.log("*********************************************************");
                // console.log("User ID: ", user._id);
                // console.log("Username: ", user.username);
                // console.log("First Name: ", user.first_name);
                // console.log("Last Name: ", user.last_name);
                // console.log("Email: ", user.email);
                // console.log("Password: ", user.password);
                // console.log("Is Active: ", user.isActive);
                // console.log("User Role: ", user.role);
                // console.log("User Permission: ", user.permission);
                // console.log("Token Generated for User: ", user.token);
                // console.log("*********************************************************");
                // console.log("*********************************************************");
                // console.log("*********************************************************");
                // console.log("***** USER ACCOUNT SUCCESSFULLY SAVED: User Details *****");
                // console.log("*********************************************************");
                // console.log(`\n*********************************************************\n*****        USER ACCOUNT SUCCESSFULLY SAVED        ***** \n********************************************************* \n ${user} \n*********************************************************\n*********************************************************`);
            }
        });

        // const token_key = process.env.TOKEN_KEY
        // const generatedToken = token_key || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1c2VyX2lkIjoiNjU0MjQzNDFhY2FiZWM5YjdhYTI4YzZiIiwiaWF0IjoxNjpgstre";
        // const token = jwt.sign({user_Id: user._id, page_title}, generatedToken, { expiresIn: "2h" });
        // blog.token = token;

        // Pass to a 'Variable' to Display User Details in Front-end !!!
        const newPost = res.status(201).json(post);
        console.log("New Blog Post Created: ", newPost);
        return;
    } catch (err) {      
        const errorCaught = res.status(500).send(`Failed to exec Account Creation: ${err}`);
        console.log("Error Caught for Account Creation: ", errorCaught);
        return;
    }
};




// Find All Users
exports.findAllPosts = async (req, res) => {
    try {
        const allPosts = await Post.find({})
        return res.status(200).json(allPosts);
    } catch (error) {
        return res.status(500).send("Some error occurred while retrieving users: ", error);
    }
};






// Find All isActive Users
exports.findPostById = async (req, res) => {
    //  res.setHeader('Content-Type', 'application/json');
    //  This method is typically used to look up a user by their unique identifier.
    const id = req.params._id;
    try{
        //  The response body(i.e userId) will contain the user document.
        //  NOTE:  This is a query operation:- User.findById();
        const postId = Post.findById(_id)
        if (postId) {
            return res.status(200).json(postId);
        } else {
            return res.status(404).json(`User with ID: ${_id} not found`);
        }
    } catch (error) {
        return res.status(500).json(`Error retrieving User with ID ${_id}`, error);
    }
};









// Find All isActive Users
exports.findAllActivePosts = async (req, res) => {
    //  res.setHeader('Content-Type', 'application/json');
    //  NOTE:  To filter a search results, specify a search condition using a "key-value" pair within curly braces, within the find method!
    //  For example, User.find({ username: 'john' }) would find all users with the username 'john'.     i.e  username = "john"
    //  In this case, We are searching for records where the isActive property is equal to true.        i.e  isActive = true
    try {
        //  The response body(i.e allActiveUsers) will contain an array of user objects representing all the active users.
        const allActivePosts = await Post.find({ isActive: true });
        return res.status(200).json(allActivePosts);
    } catch(error) {
        // Catch error
        return res.status(500).json('Error updating post: ', error);
    }
};









// Update User Information
exports.updatePost = async (req, res) => {

    const {page_title, page_description, author, tags, categories, isActive} = req.body;
    const dataToUpdate = { };

    try {
        // Use $or to find the user by username or email and update it
        const updatedPost = await Post.findOneAndUpdate({ page_title }, dataToUpdate, { new: true });
        if (updatedPost) {

            // const token_key = process.env.TOKEN_KEY
            // const generatedToken = token_key || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1c2VyX2lkIjoiNjU0MjQzNDFhY2FiZWM5YjdhYTI4YzZiIiwiaWF0IjoxNjpgstre";
            // const token = jwt.sign({user_Id: updatedPost._id, page_title}, generatedToken, { expiresIn: "2h" });
            // updatedUser.token = token;
            
            // User updated successfully
            res.status(200).json('User updated successfully', updatedPost);
            // console.log('\n', "EXISTING USER: ", updatedUser.username + " was updated!", '\n', "EXISITNG USER UPDATED: ", updatedUser);
            return;
        } else {
            // User not found
            return res.status(404).json('User not found');
        }
    } catch (error) {
        // Catch error
        return res.status(500).json('Error updating user', error);
    }
};








// Deleta a User with the Specified id in the request
exports.deletePostById = async (req, res) => {
    const id = req.params._id;
    try{
        const postId = Post.findByIdAndRemove(id, { useFindAndModify: false })
        if (!(postId)) {
            return res.status(404).json(`Cannot delete User with ID: ${id}. User was not found!`);
        } else {
            return res.status(200).json(`User: ${postId} was deleted successfully!!!`);
        }
    } catch (error) {
        return res.status(500).json(`Could not delete User with ID: ${id}  ==>  ${error}`);
    }
};











// Deleta all Users from the Database
exports.deleteAllPosts = (req, res) => {
    try{
        const allPosts = Post.deleteMany({});
        if (!(allPosts)) {
            return res.status(404).json(`Failed to execute action!  ==>  ${allPosts}`);
        } else {
            return res.status(200).json({ message: `${allPosts.deletedCount} Users was deleted successfully!`});
        }
    } catch (error) {
        return res.status(500).json({ message: error.message || "Some error occurred while removing all Users."});
    }
};










// *** NOTE: ***
// We don’t need to write CRUD functions, Mongoose Model supports all of them:
// create a new Tutorial: object.save()
// find a Tutorial by id: findById(id)
// retrieve all Tutorials: find()
// update a Tutorial by id: findByIdAndUpdate(id, data)
// remove a Tutorial: findByIdAndRemove(id)
// remove all Tutorials: deleteMany()
// find all Tutorials by title: find({ title: { $regex: new RegExp(title), $options: “i” } })
//
// These functions will be used in Our Controller.