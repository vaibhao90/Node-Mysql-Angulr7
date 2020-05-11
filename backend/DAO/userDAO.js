var LocalStrategy   = require('passport-local').Strategy;
let dbConfig = require("../Utilities/mysqlConfig");
let util = require("../Utilities/util");



module.exports.getUserByEmail = (criteria, callback) => {
    dbConfig.getDB().query(`select * from user where email = '${criteria.email}'`, callback);
}

// passport.serializeUser(function(user, done) {
//     done(null, user.id);
// });

// // used to deserialize the user
// passport.deserializeUser(function(id, done) {
//     dbConfig.getDB().query(`select * from user where id = '${id}'`,function(err,rows){	
//         done(err, rows[0]);
//     });
// });

// passport.use('local-login', new LocalStrategy({
//     // by default, local strategy uses username and password, we will override with email
//     usernameField : 'email',
//     passwordField : 'password',
//     passReqToCallback : true // allows us to pass back the entire request to the callback
// },
// function(req, email, password, done) { // callback with email and password from our form
//      connection.query(`SELECT * FROM user WHERE email = '${email}`,function(err,rows){
//         if (err)
//             return done(err);
//          if (!rows.length) {
//             return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
//         }else{
//             let row = rows[0];
//             let passwordSaltHash = util.sha512(password, row.salt);
//             if (!( rows[0].password == passwordSaltHash))
//                 return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
//         }       
//         return done(null, rows[0]);			
//     });
// }));




// passport.use('local-signup', new LocalStrategy({
//     // by default, local strategy uses username and password, we will override with email
//     usernameField : 'email',
//     passwordField : 'password',
//     passReqToCallback : true // allows us to pass back the entire request to the callback
// },
// function(req, email, password, done) {

//     // find a user whose email is the same as the forms email
//     // we are checking to see if the user trying to login already exists
//     connection.query("select * from users where email = '"+email+"'",function(err,rows){
//         console.log(rows);
//         console.log("above row object");
//         if (err)
//             return done(err);
//          if (rows.length) {
//             return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
//         } else {

//             // if there is no user with that email
//             // create the user
//             var newUserMysql = new Object();
            
//             newUserMysql.email    = email;
//             newUserMysql.password = password; // use the generateHash function in our user model
        
//             var insertQuery = "INSERT INTO users ( email, password ) values ('" + email +"','"+ password +"')";
//                 console.log(insertQuery);
//             connection.query(insertQuery,function(err,rows){
//             newUserMysql.id = rows.insertId;
            
//             return done(null, newUserMysql);
//             });	
//         }	
//     });
// }));

