var express = require('express');
var router = express.Router();
var passport = require('passport')
var axios = require('axios')

// General Routes

/* GET User Page. */
router.get('/', passport.authenticate('jwt', {session: false}), (req,res,next) => {
    console.log(req.user)
    res.render('Front/index', {user: req.user});
});

router.get('/logout', passport.authenticate('jwt', {session: false}), (req,res,next) => {
    req.session.destroy(err => {
        res.redirect('/');
    })
})



// Article Routes
router.get('/articles', 
    passport.authenticate('jwt', {session : false}), (req, res, next) => {
        let current_user = req.user
        axios.get('http://localhost:8000/api/articles/')
        .then( articles => {
            res.render('Front/articles', {articles: articles.data, current_user : current_user}
            ) 
        })
        .catch( erro => {
            console.log('Erro na consulta de artigos: ' + erro)
            res.render('error', {error: erro, message: 'My bad...'})
        })
})


// Events Routes
router.get('/events', 
    passport.authenticate('jwt', {session : false}), (req, res, next) => {
        let current_user = req.user
        axios.get('http://localhost:8000/api/events/')
        .then( events => {
            res.render('Front/events', {events: events.data, current_user : current_user}
            ) 
        })
        .catch( erro => {
            console.log('Erro na consulta de eventos: ' + erro)
            res.render('error', {error: erro, message: 'My bad...'})
        })
})

module.exports = router;