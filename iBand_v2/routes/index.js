var express = require('express');
var router = express.Router();
var passport = require('passport')
var axios = require('axios')

// General Routes

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/logout', passport.authenticate('jwt', {session: false}), (req,res,next) => {
    req.session.destroy(err => {
        res.redirect('/');
    })
})

module.exports = router;