// MongoDB URL:- Database Connection
const DATABASE_NAME = 'mydatabase',  URL = `mongodb://localhost:27017/${DATABASE_NAME}`
module.exports = {
    url: URL || process.env.MY_DATABASE
};


// module.exports = {
//     url: "mongodb://127.0.0.1:27017/saf_db"
// };