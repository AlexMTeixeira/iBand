var express = require('express');
var router = express.Router();
var passport = require('passport')

/* GET users listing. */
router.get('/', passport.authenticate('jwt', {session: false}) , (req, res, next) => {
  res.render('index');
});


module.exports = router;
