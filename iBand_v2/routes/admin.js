var express = require('express');
var router = express.Router();
var passport = require('passport')

/* GET users listing. */
router.get('/', passport.authenticate('jwtAdmin', {session: false}) , (req, res, next) => {
  res.render('admin');
});

module.exports = router;
