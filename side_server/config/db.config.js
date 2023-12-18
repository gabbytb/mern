// MongoDB URL:- Database Connection
require("dotenv").config();
let invalidDB = "no-database-connection";
const fakeDB = `mongodb://127.0.0.1:27017/${invalidDB}`



module.exports = {
    url: process.env.MY_DATABASE || fakeDB
};