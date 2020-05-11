// Define Error Codes
var crypto = require('crypto');

let statusCode = {
    OK: 200,
    FOUR_ZERO_FOUR: 404,
    FOUR_ZERO_THREE: 403,
    FOUR_ZERO_ONE: 401,
    FIVE_ZERO_ZERO: 500
    };
    
    // Define Error Messages
    let statusMessage = {
    SERVER_BUSY : 'Our Servers are busy. Please try again later.',
    DATA_UPDATED: 'Data updated successfully.',
    DELETE_DATA : 'Delete data successfully',
    
    };
    let secrete  = "SHHHHHHHH";

    var genRandomString = function(length){
        return crypto.randomBytes(Math.ceil(length/2))
                .toString('hex') /** convert to hexadecimal format */
                .slice(0,length);   /** return required number of characters */
    };
    

    var sha512 = function(password, salt){
        var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
        hash.update(password);
        var value = hash.digest('hex');
        return {
            salt:salt,
            passwordHash:value
        };
    };
    var saltHashPassword  = function(userpassword) {
        var salt = genRandomString(16); /** Gives us salt of length 16 */
        return sha512(userpassword, salt);
    }
    
    module.exports = {
        statusCode: statusCode,
        statusMessage: statusMessage,
        saltHashPassword: saltHashPassword,
        sha512: sha512,
        secrete: secrete
    }