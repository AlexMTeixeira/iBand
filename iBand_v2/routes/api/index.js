var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var passport = require('passport')
var UserController = require('../../controllers/usersController')
var ArticleController = require('../../controllers/articleController')
var EventController = require('../../controllers/eventController')

// General Routes
router.post('/login', async (req,res,next) => {
    passport.authenticate('login', async (err,user,info)=> {
        try {
            if(err || !user){
                const error = new Error('An Error Occured')
                return next(error);
            }
            req.login(user, {session: false}, async (error) => {
                if(error) return next(error)
                const myuser = {_id: user._id, email: user.email, utype: user.utype}
                const token = jwt.sign({user: myuser}, 'pri2018_iBand')
                req.user.token = token
                req.session.token = token
                if(req.user.utype == 0) 
                    res.send('/admin/')
                else
                    res.send('/users/')
            })
        } catch (error) {
            return next(error)
        }
    }) (req,res,next)
})

router.post('/register', passport.authenticate('registo', {
    session: false,
    successRedirect: '/',
    failureRedirect: '/'
}))


// User's Routes
router.get('/users',  async (req,res, next) => {
    passport.authenticate('jwtAdmin', async (error, user, info) => {
        UserController.list()
            .then(users => {
                res.jsonp(users)
            })
            .catch(error => res.status(500).send('Error on getting Users'))
    }) (req, res, next)
})

router.get('/users/:uid', (req, res, next) => {
    passport.authenticate('jwtAdmin', async (error, user, info) => {
        UserController.getById(req.params.uid)
                .then(dados => res.jsonp(dados))
                .catch(error => res.status(500).send('Erro na consulta de utilizador!'))
    }) (req, res, next)
})

router.get('/users/activate/:uid', (req,res,next)=>{
    passport.authenticate('jwtAdmin', async (error, user, info) => {
        UserController.changeActivation(req.params.uid,true)
                .then(dados => res.jsonp(dados))
                .catch(error => res.status(500).send('Erro na consulta de utilizador!'))
    }) (req, res, next)
})

router.get('/users/deactivate/:uid', (req,res,next)=>{
    passport.authenticate('jwtAdmin', async (error, user, info) => {
        UserController.changeActivation(req.params.uid,false)
                .then(dados => res.jsonp(dados))
                .catch(error => res.status(500).send('Erro na consulta de utilizador!'))
    }) (req, res, next)
})

// Articles Routes
router.get('/articles', (req, res, next) => {
    passport.authenticate('jwt', async (error, user, info) => {
        ArticleController.list()
            .then( articles => {
                res.jsonp(articles) 
            })
            .catch(error => res.status(500).send('Error on getting Users'))
    }) (req, res, next)
})

router.get('/articles/:aid', (req, res, next) => {
    passport.authenticate('jwt', async (error, user, info) => {
        ArticleController.getById(req.params.aid)
            .then( article => res.jsonp(article))
            .catch(error => res.status(500).send('Erro na consulta de utilizador!'))
    }) (req, res, next)
})

// Events Routes
router.get('/events', (req, res, next) => {
    passport.authenticate('jwt', async (error, user, info) => {
        EventController.list()
            .then( events => {
                res.jsonp(events) 
            })
            .catch(error => res.status(500).send('Error on getting Users'))
    }) (req, res, next)
})

router.get('/events/:aid', (req, res, next) => {
    passport.authenticate('jwt', async (error, user, info) => {
        EventController.getById(req.params.aid)
            .then( event => res.jsonp(event) )
            .catch(error => res.status(500).send('Erro na consulta de utilizador!'))
    }) (req, res, next)
})


module.exports = router