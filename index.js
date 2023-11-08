// Express.JS is a web application server framework for Node.JS, and MongoDB is a general-purpose document database platform.
// You can use these together to build a web application that stores data in MongoDB

// Import and configure dotenv
require('dotenv').config();


// Import Express.js, Cors, and Mongoose
// Web Application Server Framework for NodeJS.
// Cross-Origin Resource Sharing in Node.js is a mechanism by which a front-end client can make requests for resources to an external back-end server.
// Mongoose is a promise-based Object Data Modeling (ODM) library for the Node.js framework
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");



////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  SERVER: WEB_APPLICATION_FRAMEWORK
////////////////////////////////////////////////////////////////////////////////////////////////////////////
const app = express();
// middleware for parsing json objects:-  parse requests of content-type - application/json
app.use(express.json());
// For establishing a Serve front-end client to make requests for resources on the back-end server:-  /8000/users === /3000/users
// var corsOptions = {
//     origin: "http://127.0.0.1:8000"
// };
// app.use(cors(corsOptions));
app.use(cors());
// middleware for parsing bodies from URL (Uniform Resource Locator): parse requests of content-type - application/x-www-form-urlencoded
// The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true).
// E.g A few examples: data:,Hello%2C%20World%21. The text/plain data Hello, World! . Note how the comma is URl encoded as %2C , and the space character as %20 .28 Aug 2023
// app.use(express.urlencoded({ extended: true }));
// middleware for front-end client to make requests for resources on the back-end server:-  /8000/users === /3000/users
app.use(express.urlencoded({ extended: false }));





////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  MONGODB: DATABASE_CONNNECTION
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// For establishing a (mongodb://127.0.0.1:27017/database) connection...
////////////////////////////////////////////////////////////////////////////////////////////////////////////
const db = require("./side_server/models");
mongoose.set("strictQuery", false);
db.mongoose.connect(db.url)
.then(() => {
    console.log(`Connected to the database: ${db.url} [SUCCESSFULLY]`);
})
.catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//******************************************    SERVER ROUTES    ******************************************/
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Simple Backend Route   (*** Home ***)
app.get("/", (req, res) => {
    res.status(200).send('Welcome to SAF app');
});


// Backend Create User Route
// app.get("/user/signup", (req, res) => {
//     res.status(200).send('Sign up');
// });


// // Backend User Log-in Route
// app.get("/user/login", (req, res) => {
//     res.status(200).send('Log in');
// });


// // Backend User Dashboard Route
// app.get("/admin/dashboard", (req, res) => {
//     res.json({
//         message: "Dashboard"
//     })
// });




// IMPORT: ROUTE of USER MODEL CRUD Operations
require("./side_server/routes/user.routes")(app);



// Server setup: Set port to listen for requests
const port = process.env.EXPRESS_PORT || 8001;
const server = app.listen(port, () => {
    let port = server.address().port
    console.log("Listening at: ", port)
})








// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ***Don't Touch*** ==> SUCCESSFUL AUTO-CONNECTION TO DATABASE
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////  
// function DATABASE_CONNNECTION() {    
//     var conn = mongoose.connection;
//     // console.log(conn);
//     conn.on('connected', function() {
//         console.log(`Database is connected successfully to ${uri}`);
//     });
//     conn.on('disconnected', function(){
//         console.log(`Database is disconnected successfully from ${uri}`);
//     })
//     conn.on('error', console.error.bind(console, 'connection error:'));
// };
// DATABASE_CONNNECTION();
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////