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

router.get('/users/remove/:uid', (req,res,next)=>{
    passport.authenticate('jwtAdmin', async (error, user, info) => {
        UserController.delete(req.params.uid)
                .then(() => res.status(200).send('User Removed'))
                .catch(error => res.status(500).send('Erro na consulta de utilizador!'))
    }) (req, res, next)
})

router.post('/users/update', (req,res,next)=>{
    passport.authenticate('jwtAdmin', async (error, user, info) => {
        var email = req.body.email
        var pass = req.body.password
        var name = req.body.name
        var utype = req.body.utype
        var valid = req.body.valid
        UserController.updateUser(email,pass,name,utype,valid)
                .then(() => res.status(200).send('User Updated'))
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

router.post('/articles', (req,res,next)=>{
    passport.authenticate('jwt', async (error, user, info) => {
        var title = req.body.title
        var author = req.body.author
        var date = req.body.date
        var content = req.body.content
        ArticleController.insert({title,author,date,content})
                .then(() => res.status(200).send('Article Created'))
                .catch(error => res.status(500).send('Erro na criação de artigo!'))
    }) (req, res, next)
})

router.post('/articles/update', (req,res,next)=>{
    passport.authenticate('jwt', async (error, user, info) => {
        var _id = req.body._id
        var title = req.body.title
        var author = req.body.author
        var date = req.body.date
        var content = req.body.content
        ArticleController.updateArticle(_id,title,author,date,content)
                .then(() => res.status(200).send('Article Updated'))
                .catch(error => res.status(500).send('Erro no update de artigo!'))
    }) (req, res, next)
})

router.get('/articles/remove/:uid', (req,res,next)=>{
    passport.authenticate('jwt', async (error, user, info) => {
        ArticleController.delete(req.params.uid)
                .then(() => res.status(200).send('Article Removed'))
                .catch(error => res.status(500).send('Erro na remoção de Article!'))
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

router.post('/events', (req,res,next)=>{
    passport.authenticate('jwt', async (error, user, info) => {
        var local = req.body.local
        var theme = req.body.theme
        var description = req.body.description
        var date = req.body.date
        var hour = req.body.hour
        var duration = req.body.duration
        EventController.insert({local,theme,description,date,hour,duration})
                .then(() => res.status(200).send('Event Created'))
                .catch(error => res.status(500).send('Erro na criação de evento!'))
    }) (req, res, next)
})

router.post('/events/update', (req,res,next)=>{
    passport.authenticate('jwt', async (error, user, info) => {
        var _id = req.body._id
        var local = req.body.local
        var theme = req.body.theme
        var description = req.body.description
        var date = req.body.date
        var hour = req.body.hour
        var duration = req.body.duration
        EventController.updateEvent(_id,local,theme,description,date,hour,duration)
                .then(() => res.status(200).send('Event Updated'))
                .catch(error => res.status(500).send('Erro no update de evento!'))
    }) (req, res, next)
})

router.get('/events/remove/:uid', (req,res,next)=>{
    passport.authenticate('jwt', async (error, user, info) => {
        EventController.delete(req.params.uid)
                .then(() => res.status(200).send('Event Removed'))
                .catch(error => res.status(500).send('Erro na remoção de Event!'))
    }) (req, res, next)
})


module.exports = router