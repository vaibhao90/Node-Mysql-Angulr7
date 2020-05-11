let express = require('express'),
    router = express.Router(),
    util = require('../Utilities/util'),
    userService = require('../Services/user');

router.post('/login', (req, res) => {
    userService.login(req.body, (data) => {
        res.json(data);
    });
});
module.exports = router;