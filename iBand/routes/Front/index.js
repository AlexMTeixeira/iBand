var express = require('express');
var router = express.Router();
var passport = require('passport')
var axios = require('axios')

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
// Users Routes
router.get('/users', 
    passport.authenticate('jwt', {session: false}), (req, res, next) => {
    let current_user = req.user
    axios.get('http://localhost:8000/api/users/')
        .then( users => {
                res.render('Front/users', {users: users.data, current_user : current_user}
            ) 
        })
        .catch( erro => {
            console.log('Erro na consulta de utilizadores: ' + erro)
            res.render('error', {error: erro, message: 'My bad...'})
        })
})

router.get('/users/:uid', 
    passport.authenticate('jwt', {session: false}), (req, res, next) => {
        let current_user = req.user
        axios.get('http://localhost:8000/api/users/' + req.params.uid)
        .then( user => {
            res.render('Front/user', {user: user.data, current_user : current_user}
            ) 
        })
        .catch( erro => {
            console.log('Erro na consulta de utilizadore: ' + erro)
            res.render('error', {error: erro, message: 'My bad...'})
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

router.get('/articles/:aid', 
    passport.authenticate('jwt', {session: false}), (req, res, next) => {
        let current_user = req.user
        axios.get('http://localhost:8000/api/articles/' + req.params.aid)
        .then( article => {
            res.render('Front/article', {article: article.data, current_user : current_user}
            ) 
        })
        .catch( erro => {
            console.log('Erro na consulta de artigo: ' + erro)
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

router.get('/events/:eid', 
    passport.authenticate('jwt', {session: false}), (req, res, next) => {
        let current_user = req.user
        axios.get('http://localhost:8000/api/events/' + req.params.eid)
        .then( article => {
            res.render('Front/article', {article: article.data, current_user : current_user}
            ) 
        })
        .catch( erro => {
            console.log('Erro na consulta de artigo: ' + erro)
            res.render('error', {error: erro, message: 'My bad...'})
        })
})




module.exports = router;