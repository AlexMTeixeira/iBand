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
            console.log(user.data)
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
            console.log(articles.data)
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
            console.log(article.data)
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