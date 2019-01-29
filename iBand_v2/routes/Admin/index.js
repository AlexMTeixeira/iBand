var express = require('express');
var router = express.Router();
var passport = require('passport')
var axios = require('axios')

// Users Routes
router.get('/users', 
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
    axios.get('http://localhost:8000/api/users/')
        .then( users => {
            res.render('Admin/users', {users: users.data}
            ) 
        })
        .catch( erro => {
            console.log('Erro na consulta de utilizadores: ' + erro)
            res.render('error', {error: erro, message: 'My bad...'})
        })
})

router.get('/users/:uid', 
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
        axios.get('http://localhost:8000/api/users/' + req.params.uid)
        .then( user => {
            res.render('Admin/user', {user: user.data}
            ) 
        })
        .catch( erro => {
            console.log('Erro na consulta de utilizadore: ' + erro)
            res.render('error', {error: erro, message: 'My bad...'})
        })
})


// Article Routes
router.get('/articles', 
    passport.authenticate('jwtAdmin', {session : false}), (req, res, next) => {
        axios.get('http://localhost:8000/api/articles/')
        .then( articles => {
            res.render('Admin/articles', {articles: articles.data}
            ) 
        })
        .catch( erro => {
            console.log('Erro na consulta de artigos: ' + erro)
            res.render('error', {error: erro, message: 'My bad...'})
        })
})

router.get('/articles/:aid', 
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
        axios.get('http://localhost:8000/api/articles/' + req.params.aid)
        .then( article => {
            res.render('Admin/article', {article: article.data}
            ) 
        })
        .catch( erro => {
            console.log('Erro na consulta de artigo: ' + erro)
            res.render('error', {error: erro, message: 'My bad...'})
        })
})


// Events Routes
router.get('/events', 
    passport.authenticate('jwtAdmin', {session : false}), (req, res, next) => {
        axios.get('http://localhost:8000/api/events/')
        .then( events => {
            res.render('Admin/events', {events: events.data}
            ) 
        })
        .catch( erro => {
            console.log('Erro na consulta de eventos: ' + erro)
            res.render('error', {error: erro, message: 'My bad...'})
        })
})

router.get('/events/:eid', 
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
        axios.get('http://localhost:8000/api/events/' + req.params.eid)
        .then( article => {
            res.render('Admin/article', {article: article.data}
            ) 
        })
        .catch( erro => {
            console.log('Erro na consulta de artigo: ' + erro)
            res.render('error', {error: erro, message: 'My bad...'})
        })
})


// Generel Routes
router.get('/', passport.authenticate('jwtAdmin', {session: false}) , (req, res, next) => {
  res.render('Admin/index')
});


module.exports = router;