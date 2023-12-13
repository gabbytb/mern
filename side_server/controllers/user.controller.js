const db = require("../models");
const User = db.users
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");









// Create New User
exports.create = async (req, res) => {

    const {username, first_name, last_name, email, password, isActive, role="admin", permission=["project-index", "project-create", "project-delete"]} = req.body;
    
    try {   
        // FORM VALIDATION:  If any of these fields, is missing in the payload, display 'errMsg' !!!!
        if (!(username && first_name && last_name && email && password && isActive)) {
            const errMsg = res.status(200).send('Fill all the required inputs');
            console.log("Fill all the required inputs: ", errMsg);
            return;
        }          

        const emailExists = await User.findOne({email: email.toLowerCase()});
        const usernameExists = await User.findOne({username: username.toLowerCase()});
        if (emailExists) {
            const emailExistsMsg = res.status(200).send('User with email exists. Please sign-in.');
            console.log("Email exists: ", emailExistsMsg);
            return;
        } else if (usernameExists) {
            const usernameExistsMsg = res.status(200).send('User with username exists. Please sign-in.');
            console.log("Username exists: ", usernameExistsMsg);
            return;
        } else {
            const encryptedPassword = await bcrypt.hashSync(password, bcrypt.genSaltSync());
            const user = new User({
                userName: username.toLowerCase(),
                first_name,
                last_name,
                email: email.toLowerCase(),    // sanitize: convert email to lowercase
                password: encryptedPassword,
                role,
                permission,
                isActive,
            });

            const token_key = process.env.TOKEN_KEY
            const generatedToken = token_key || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1c2VyX2lkIjoiNjU0MjQzNDFhY2FiZWM5YjdhYTI4YzZiIiwiaWF0IjoxNjpgstre";
            const token = jwt.sign({user_Id: user._id, email}, generatedToken, { expiresIn: "2h" });
            user.token = token;

            user.save(user, (err) => {
                if (err) {
                    console.error(`Error encountered when saving USER: `, err);
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
                    console.log(`\n*********************************************************\n*****        USER ACCOUNT SUCCESSFULLY SAVED        ***** \n********************************************************* \n ${user} \n*********************************************************\n*********************************************************`);
                }
            });

            // Pass to a 'Variable' to Display User Details in Front-end !!!
            res.status(201).json(user);
            // console.log("New User Created: ", newAccount);
            return;
        }
    } catch (err) {      
        const errorCaught = res.status(500).send(`Failed to exec Account Creation: ${err}`);
        console.log("Error Caught during Account Creation: ", errorCaught);
        return;
    }
};






// Our login logic starts here
exports.logIn = async (req, res) => {

    // res.setHeader('Content-Type', 'application/json');
    
    try {
        const { email, password } = req.body;
  
        // Find the user by email
        const user = await User.findOne({ email });
                
        // Check if the user exists and the password is correct
        if (user && await bcrypt.compare(password, user.password)) {
            
            // Generate a token
            const token = jwt.sign({ user_Id: user._id, email}, process.env.TOKEN_KEY, { expiresIn: "2h" });            
            
            // Send the token and user information in the response
            res.status(200).json({ user, token });

            console.log("\n", "***** USER THAT IS LOGGED-IN *****", '\n', "USERNAME: ", user.username, '\n', "FULL NAME: ", user.first_name + " " + user.last_name, "\n", "USER EMAIL: ", user.email,"\n", "USER ROLE: ", user.role,"\n", "TOKEN GENERATED FOR USER: ", token);
            // console.log("\n", "***** USER THAT IS LOGGED-IN *****", '\n', "USERNAME: ", user.username, '\n', "FULL NAME: ", user.first_name + " " + user.last_name, "\n", "USER EMAIL: ", user.email,"\n", "USER TOKEN: ", user.token, "\n\n", "TOKEN GENERATED FOR USER: ", token);
            // console.log("TOKEN GENERATED: ", token);

        } else {
            // Authentication failed
            const errMsg = res.status(401).send('No match found');
            console.log("\n*********************************************************************************");
            console.log("This User has enter'd incorrect Log-in details: ", errMsg);
            
        }
    } catch (error) {
        // Handle other errors
        res.status(500).json({ error: error.message });
    }
};







// Find All Users
exports.findAll = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    try {
        const allUsers = await User.find({})
        return res.status(200).json(allUsers);
    } catch (error) {
        return res.status(500).send("Some error occurred while retrieving users: ", error);
    }
};






// Find All isActive Users
exports.findUserById = async (req, res) => {
    //  res.setHeader('Content-Type', 'application/json');
    //  This method is typically used to look up a user by their unique identifier.
    const id = req.params._id;
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
        phone, address, address2, city, state, country, zipCode, token
    };

    try {
        // Use $or to find the user by username or email and update it
        const updatedUser = await User.findOneAndUpdate({ $or: [{ username }, { email }] }, dataToUpdate, { new: true });
        if (updatedUser) {

            const token_key = process.env.TOKEN_KEY
            const generatedToken = token_key || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1c2VyX2lkIjoiNjU0MjQzNDFhY2FiZWM5YjdhYTI4YzZiIiwiaWF0IjoxNjpgstre";
            const token = jwt.sign({user_Id: updatedUser._id, email}, generatedToken, { expiresIn: "2h" });
            updatedUser.token = token;
            
            // User updated successfully
            res.status(200).json({ message: 'User updated successfully', updatedUser });
            console.log('\n', "EXISTING USER: ", updatedUser.username + " was updated!", '\n', "EXISITNG USER UPDATED: ", updatedUser);
            return;
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
    const id = req.params._id;
    try{
        const userId = User.findByIdAndRemove(id, { useFindAndModify: false })
        if (!(userId)) {
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