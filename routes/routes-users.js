var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Nekky' });
});

/* GET Sign In page. */
router.get('/signin', function(req, res) {
    res.render('signin', { title: 'Nekky - Sign in' });
});

/* GET Sign Up page. */
router.get('/signup', function(req, res) {
    res.render('signup', { title: 'Nekky - Sign up' });
});

module.exports = router;
