var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var passport = require('passport')
var UserController = require('../../controllers/usersController')
var ArticleController = require('../../controllers/articleController')
var EventController = require('../../controllers/eventController')
var WorkController = require('../../controllers/workController')

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
                if(user.utype == 0) 
                    res.send('/admin/')
                else
                    res.send('/user/')
            })
        } catch (err) {
            return next(err)
        }
    }) (req,res,next)
})

router.post('/register', passport.authenticate('registo', {
    session: false,
    successRedirect: '/',
    failureRedirect: '/'
}))


// User's Routes
router.get('/users',  passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
    UserController.list()
        .then(users => {
            res.jsonp(users)
        })
        .catch(error => res.status(500).send('Error on getting Users'))
}) 

router.get('/users/:uid', passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
    UserController.getById(req.params.uid)
            .then(dados => res.jsonp(dados))
            .catch(error => res.status(500).send('Erro na consulta de utilizador!'))
})

router.get('/users/activate/:uid', passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
    UserController.changeActivation(req.params.uid,true)
            .then(dados => res.jsonp(dados))
            .catch(error => res.status(500).send('Erro na consulta de utilizador!'))
})

router.get('/users/deactivate/:uid', passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
    UserController.changeActivation(req.params.uid,false)
            .then(dados => res.jsonp(dados))
            .catch(error => res.status(500).send('Erro na consulta de utilizador!'))
})

router.get('/users/remove/:uid', passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
    UserController.delete(req.params.uid)
            .then(() => res.status(200).send('User Removed'))
            .catch(error => res.status(500).send('Erro na consulta de utilizador!'))
})

router.post('/users/update', passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
    var email = req.body.email
    var pass = req.body.password
    var name = req.body.name
    var utype = req.body.utype
    var valid = req.body.valid
    UserController.updateUser(email,pass,name,utype,valid)
            .then(() => res.status(200).send('User Updated'))
            .catch(error => res.status(500).send('Erro na consulta de utilizador!'))
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
    passport.authenticate('jwtProd', async (error, user, info) => {
        var author
        
        if(user.utype==0) author = req.body.author
        else author = user.email
        
        var title = req.body.title
        var date = req.body.date
        var content = req.body.content
        ArticleController.insert({title,author,date,content})
                .then(() => res.status(200).send('Article Created'))
                .catch(error => res.status(500).send('Erro na criação de artigo!'))
    }) (req, res, next)
})

router.post('/articles/update', (req,res,next)=>{
    passport.authenticate('jwtProd', async (error, user, info) => {
        var _id = req.body._id
        var title = req.body.title

        var author
        if(user.utype==0) author = req.body.author
        else author = user.email

        var utype = user.utype
        
        var date = req.body.date
        var content = req.body.content
        ArticleController.updateArticle(_id,title,author,date,content,utype)
                .then(() => res.status(200).send('Article Updated'))
                .catch(error => res.status(500).send('Erro no update de artigo!'))
    }) (req, res, next)
})

router.get('/articles/remove/:uid', (req,res,next)=>{
    passport.authenticate('jwtProd', async (error, user, info) => {
        ArticleController.delete(req.params.uid,user.email,user.utype)
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
    passport.authenticate('jwtProd', async (error, user, info) => {
        var author
        
        if(user.utype==0) author = req.body.author
        else author = user.email

        var local = req.body.local
        var theme = req.body.theme
        var description = req.body.description
        var date = req.body.date
        var hour = req.body.hour
        var duration = req.body.duration
        EventController.insert({author,local,theme,description,date,hour,duration})
                .then(() => res.status(200).send('Event Created'))
                .catch(error => res.status(500).send('Erro na criação de evento!'))
    }) (req, res, next)
})

router.post('/events/update', (req,res,next)=>{
    passport.authenticate('jwtProd', async (error, user, info) => {
        var author
        
        if(user.utype==0) author = req.body.author
        else author = user.email

        var utype = user.utype
        var _id = req.body._id
        var local = req.body.local
        var theme = req.body.theme
        var description = req.body.description
        var date = req.body.date
        var hour = req.body.hour
        var duration = req.body.duration
        EventController.updateEvent(_id,local,theme,description,date,hour,duration,author,utype)
                .then(() => res.status(200).send('Event Updated'))
                .catch(error => res.status(500).send('Erro no update de evento:'))
    }) (req, res, next)
})

router.get('/events/remove/:uid', (req,res,next)=>{
    passport.authenticate('jwtProd', async (error, user, info) => {
        EventController.delete(req.params.uid,user.email,user.utype)
                .then(() => res.status(200).send('Event Removed'))
                .catch(error => res.status(500).send('Erro na remoção de Event!'))
    }) (req, res, next)
})

// Events Routes
router.get('/works', (req, res, next) => {
    passport.authenticate('jwt', async (error, user, info) => {
        WorkController.list()
            .then( works => {
                res.jsonp(works) 
            })
            .catch(error => res.status(500).send('Error on getting Users'))
    }) (req, res, next)
})


router.get('/works/remove/:uid', (req,res,next)=>{
    passport.authenticate('jwtAdmin', async (error, user, info) => {
        WorkController.delete(req.params.uid)
                .then(() => res.status(200).send('Works Removed'))
                .catch(error => res.status(500).send('Erro na remoção de Works!'))
    }) (req, res, next)
})


module.exports = router