const db = require("../models");
const User = db.users
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");




// Create New User
exports.create = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    try {
        const { username, first_name, last_name, email, password, isActive } = req.body;
        if (!(username && password)) {
            return res.status(400).send({ message: 'All inputs is required' });
        }

        const existingUser = await User.findOne({ $or: [{ email } || { username }] });
        if (existingUser) {
            return res.status(200).send({ message: `User exists. Please Login`});
        }

        const encryptedPassword = await bcrypt.hashSync(password, bcrypt.genSaltSync());
        const user = new User({
            username,
            first_name,
            last_name,
            email: email.toLowerCase(),    // sanitize: convert email to lowercase
            password: encryptedPassword,
            role: "agent",
            permission: ["contact-index"],
            isActive
        });
        
        const token_key = process.env.TOKEN_KEY;
        const generatedToken = token_key || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1c2VyX2lkIjoiNjU0MjQzNDFhY2FiZWM5YjdhYTI4YzZiIiwiaWF0IjoxNjpgstre";
        const token = jwt.sign({user_id: user._id, username}, generatedToken, { expiresIn: "2h" });
        user.token = token;    
            
        user.save(user, (err) => {
            if (err) {
                console.error('Error saving data to Database');
            } else {
                console.log("*****User Saved to Database: ", user + " *****");
            }
        });
        return res.status(201).json(user);
    
    } catch (err) {      
        console.log(err);
        return res.status(500).send({ message: err || "Some error occurred while creating new User." });
    }
};






// Our login logic starts here
exports.logIn = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    try {   
        const { email, password } = req.body;

        if (!(email && password)) {
            return res.status(400).send("Enter e-mail and password");
        }

        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            
            // Create token
            const token = jwt.sign({user_id: user._id, email}, process.env.TOKEN_KEY, { expiresIn: "2h" });

            // save user token
            user.token = token;

            // user
            return res.status(200).json(user);
        }   

        return res.status(400).send("Invalid Credentials");
    } 
    catch (err) {
        return res.status(500).send({ error: err.message });
    }
};







// Find All Users
exports.findAll = async (req, res) => {
    // res.setHeader('Content-Type', 'application/json');
    try {
        const allUsers = await User.find({})
        return res.status(200).json(allUsers);
    } catch (error) {
        return res.status(500).send({ message: "Some error occurred while retrieving users." || error });
    }
};






// Find All isActive Users
exports.findUserById = async (req, res) => {
    //  res.setHeader('Content-Type', 'application/json');
    //  This method is typically used to look up a user by their unique identifier.
    const id = req.params.id;
    try{
        //  The response body(i.e userId) will contain the user document.
        //  NOTE:  This is a query operation:- User.findById();
        const userId = User.findById(id)
        if (userId) {
            return res.status(200).json(userId);
        } else {
            return res.status(404).json({ message: `User with ID: ${id} not found` });
        }
    } catch (error) {
        return res.status(500).json({ message: `Error retrieving User with ID ${id}`, error });
    }
};






// Find All isActive Users
exports.findAllActive = async (req, res) => {
    //  res.setHeader('Content-Type', 'application/json');
    //  NOTE:  To filter a search results, specify a search condition using a "key-value" pair within curly braces, within the find method!
    //  For example, User.find({ username: 'john' }) would find all users with the username 'john'.     i.e  username = "john"
    //  In this case, We are searching for records where the isActive property is equal to true.        i.e  isActive = true
    try {
        //  The response body(i.e allActiveUsers) will contain an array of user objects representing all the active users.
        const allActiveUsers = await User.find({ isActive: true });
        return res.status(200).json(allActiveUsers);
    } catch(error) {
        // Catch error
        return res.status(500).json({ message: 'Error updating user', error });
    }
};






// Update User Information
exports.updateUser = async (req, res) => {
    //  res.setHeader('Content-Type', 'application/json');
    const {username, phone, address, address2, city, state, country, zipCode, email} = req.body;
    const dataToUpdate = {   
        phone, address, address2, city, state, country, zipCode
    };

    try {
        // Use $or to find the user by username or email and update it
        const updatedUser = await User.findOneAndUpdate({ $or: [{ username }, { email }] }, dataToUpdate, { new: true });
        if (updatedUser) {
            // User updated successfully
            return res.status(200).json({ message: 'User updated successfully', updatedUser });
        } else {
            // User not found
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        // Catch error
        return res.status(500).json({ message: 'Error updating user', error });
    }
};







// Deleta a User with the Specified id in the request
exports.deleteUser = async (req, res) => {
    //  res.setHeader('Content-Type', 'application/json');
    const id = req.params.id;
    try{
        const userId = User.findByIdAndRemove(id, { useFindAndModify: false })
        if (!userId) {
            return res.status(404).json({ message: `Cannot delete User with ID = ${id}. User was not found!` });
        } else {
            return res.status(200).json({ message: "User deleted successfully!", userId});
        }
    } catch (error) {
        return res.status(500).json({ message: `Could not delete User with ID = ${id}`, err });
    }
};






// Deleta all Users from the Database
exports.deleteAllUsers = (req, res) => {
    //  res.setHeader('Content-Type', 'application/json');
    try{
        const users = User.deleteMany({});
        if (!users) {
            return res.status(404).json({ message: "Failed to execute action!" });
        } else {
            return res.status(200).json({ message: `${users.deletedCount} Users was deleted successfully!`});
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