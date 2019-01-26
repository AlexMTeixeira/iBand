var express = require('express');
var router = express.Router();
var passport = require('passport')

/* GET users listing. */
router.get('/', passport.authenticate('jwt', {session: false}) , (req, res, next) => {
  res.render('index');
});

router.get('/logout', passport.authenticate('jwt', {session: false}), (req,res,next) => {
  req.session.destroy(err => {
    res.redirect('/');
  })
})
module.exports = router;
