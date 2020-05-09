var express = require('express');
var app = express();
var router = express.Router(),
bodyParser = require('body-parser');
var swaggerDocument = require('./swagger.json');
var cors = require('cors'),
path = require('path'),
util = require('./Utilities/util');;
let articleRoute = require('./Routes/article');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.use(cors());

app.use(function(err, req, res, next) {
    console.log("aaaa", err);
return res.send({ "statusCode": util.statusCode.ONE, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG });
});

// router.get('/', function (req, res) {
//    res.send('Hello World');
// })

app.use('/article', articleRoute);

router.get('/users', function (req, res) {
    res.json([
        {
            _id: "111",
            email: "vaibhao@email.com",
            firstName: "vaibhao",
            lastName: "dumore"
        }
    ])
 })
 var swaggerUi = require('swagger-ui-express');
//var  swaggerDocument = require('./swagger.json');

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

app.use(function(req, res, next) {
next();
});
app.use(express.static(path.join(__dirname, '../frontend/dist/frontend')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/frontend/index.html'));
})
            


app.listen(3000,function(){
    console.log('app listening on port: 3000');
    });
module.exports = app;
