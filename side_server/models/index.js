// Mongoose is a Node.js-based Object Data Modeling (ODM) library for MongoDB, used to translate a Model and its representation from MongoDB to the Node.js server.
// ODM is an implementation of a Business Rule Management System:-  It allows the creation, management, testing and governance of business rules and events, and stores them in a central repository where they can be accessed by multiple individuals and software products.
// SUMMARY: mongoose can be used with Express and Node.js, to Model Data and connect it to the Database.


// IMPORT DataBase Management System Uniform Resource Locator 
const dbConfig = require('../config/db.config.js');
// IMPORT mongoose
const mongoose = require('mongoose');
// IMPORT mongoose Global Promise
mongoose.Promise = global.Promise;




// Define Global Entry Data Type as "Object(s)".
const db = {};
// Object(s) will use Mongoose Object, for Connection & Interaction with DataBase.
db.mongoose = mongoose;     
// parse mongoDB db.url === dbConfig.url  [i.e Database Connection URL].
db.url = dbConfig.url;




// a) db.users === 'User Model'
// b) Always require mongoose for 'User Model' connection & interaction with DataBase.
db.users = require("./user.model.js")(mongoose);
db.blogs = require("./blog.model.js")(mongoose);




// module.exports is an object in a Node.js file that holds the exported values and functions from that module.
module.exports = db;



