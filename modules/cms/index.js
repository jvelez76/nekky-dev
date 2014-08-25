/* Module manager */
var express = require('express');
var router = express.Router();

//Call module Sign in
var signin = require('../signin/signin.js');
router.use('/', signin);


module.exports = router;