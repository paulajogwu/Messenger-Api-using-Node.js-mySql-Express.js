var express = require('express')
var session = require('express-session');
var router = express.Router();


var SendCon = require('../controller/messengerController');


router.get('/', function (req, res, next) {
    res.send('Good to Go')
});
router.post('/send', SendCon.send);
router.get('/getMessageByUserId/', SendCon.getMessageByUserId);


module.exports = router;