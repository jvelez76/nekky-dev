//Module Singin
var express = require('express');
var router = express.Router();
//Show form Signin
router.get("/", function (req, res) {
    res.send("<a href='/signin'> Sign in</a>");

})

router.get("/signin", function (req, res) {
    res.render("signin");
});

module.exports = router;
