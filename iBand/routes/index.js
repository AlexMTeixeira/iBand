var express = require('express');
var router = express.Router();
var passport = require('passport')
var LogController = require('../controllers/logController')
// General Routes

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/logout', passport.authenticate('jwt', {session: false}), (req,res,next) => {
    LogController.insert({user_id:req.user, action:'logout'})
    req.session.destroy(err => {
        res.redirect('/');
    })
})

module.exports = router;