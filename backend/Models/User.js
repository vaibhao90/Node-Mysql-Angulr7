let mysqlConfig = require("../Utilities/mysqlConfig");
let adminUser = require("../Utilities/config").adminUser;
let util = require("../Utilities/util");
let initialize = () => {
    console.log("Initialize user table");
    mysqlConfig.getDB().query("create table IF NOT EXISTS user (id INT auto_increment primary key, firstname VARCHAR(100), lastname VARCHAR(100), email VARCHAR(100), password VARCHAR(300), salt VARCHAR(100))");
    mysqlConfig.getDB().query(`select * from user`,function(err,rows){
        if(!err && !rows.length){
            let passwordSaltHash = util.saltHashPassword(adminUser.password);
            let dataset = {
                id: 1,
                firstname: "John",
                lastname: "Doe",
                email: adminUser.email,
                password: passwordSaltHash.passwordHash,
                salt: passwordSaltHash.salt
            }
            // var insertQuery = `INSERT INTO user set (email, password, salt) values ('${adminUser.email}','${passwordSaltHash.passwordHash}', '${passwordSaltHash.salt}')`;
            var insertQuery = `INSERT INTO user set ?`;
            mysqlConfig.getDB().query(insertQuery, dataset, function(err,rows){
            })
        }
    })
}


module.exports = {
initialize: initialize
}