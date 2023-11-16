const db = require("../models");
const User = db.users
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");







// Our login logic starts here
exports.login = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    
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

            console.log("\n", "***** USER THAT IS LOGGED-IN *****", '\n', "USER USERNAME: ", user.username, '\n', "USER NAME: ", user.first_name + " " + user.last_name, "\n", "USER EMAIL: ", user.email,'\n', "USER TOKEN: ", user.token, "\n\n", "TOKEN GENERATED FOR USER: ", token);
            // console.log("TOKEN GENERATED: ", token);

        } else {
            // Authentication failed
            const errMsg = res.status(401).send('Invalid credentials');
            console.log("Invalid Credentials: ", errMsg);
        }
    } catch (error) {
        // Handle other errors
        res.status(500).json({ error: error.message });
    }
};