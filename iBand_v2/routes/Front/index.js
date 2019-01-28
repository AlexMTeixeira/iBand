var express = require('express');
var router = express.Router();
var passport = require('passport')

// General Routes

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.render('Front/index');
});

router.get('/logout', passport.authenticate('jwt', {session: false}), (req,res,next) => {
    req.session.destroy(err => {
        res.redirect('/');
    })
})

// Users's Routes

module.exports = router;