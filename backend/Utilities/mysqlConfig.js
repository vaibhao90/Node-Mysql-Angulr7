var config = require("../Utilities/config").config;
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: config.DB_URL_MYSQL.host,
    user: config.DB_URL_MYSQL.user,
    password: config.DB_URL_MYSQL.password,
    database: config.DB_URL_MYSQL.database,
});

connection.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    
    require('../Models/Article').initialize();
});

let getDB = () => {
    return connection;
}

module.exports = {
    getDB: getDB
}