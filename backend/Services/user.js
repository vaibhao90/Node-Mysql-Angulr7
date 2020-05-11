let async = require('async'),
    parseString = require('xml2js').parseString;

let util = require('../Utilities/util'),
    usereDAO = require('../DAO/userDAO');

let errorMessage = "Incorrect email or password";
var jwt = require('jsonwebtoken');

module.exports.login = function (data, callback) {
    async.auto({
        login: (cb) => {
            let criteria = {
                email: data.email
            }
            let password = data.password;
            usereDAO.getUserByEmail(criteria, (err, rows) => {
                if (err) {
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY, "err": err });
                    return;
                } else if (!rows.length) {
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": errorMessage });
                    return;
                } else {
                    let row = rows[0];
                    let passwordSaltHash = util.sha512(password, row.salt);
                    if (row.password == passwordSaltHash.passwordHash) {
                        var token = jwt.sign({ 
                            email: row.email,
                            id: row.id
                         }, util.secrete);

                        cb(null, { "statusCode": util.statusCode.OK, "statusMessage": "Login successfull", token: token});
                    } else {
                        cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": errorMessage });
                    }
                    return
                }
            });
        }
    }, (err, response) => {
        callback(response.login);
    })
}    