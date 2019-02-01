var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var passport = require('passport')
var UserController = require('../../controllers/usersController')
var ArticleController = require('../../controllers/articleController')
var EventController = require('../../controllers/eventController')
var WorkController = require('../../controllers/workController')
var LogController = require('../../controllers/logController')

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

                LogController.insert({user_id:user._id, action:'login'})

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
            LogController.insert({user_id:req.user._id, action:'users list'})
            res.jsonp(users)
        })
        .catch(error => res.status(500).send('Error on getting Users'))
}) 

router.get('/users/:uid', passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
    UserController.getById(req.params.uid)
            .then(dados => {
                LogController.insert({user_id:req.user._id, action:'user view ' + req.params.uid})
                res.jsonp(dados)
            })
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
router.get('/articles',  passport.authenticate('jwt', {session: false}), (req, res, next) => {
        ArticleController.list()
            .then( articles => {
                res.jsonp(articles) 
            })
            .catch(error => res.status(500).send('Error on getting Users'))
})

router.get('/articles/top5',  passport.authenticate('jwt', {session: false}), (req, res, next) => {
    ArticleController.topList()
        .then( articles => {
            res.jsonp(articles) 
        })
        .catch(error => res.status(500).send('Error on getting Users'))
})

router.get('/articles/:aid',  passport.authenticate('jwt', {session: false}), (req, res, next) => {
        ArticleController.getById(req.params.aid)
            .then( article => res.jsonp(article))
            .catch(error => res.status(500).send('Erro na consulta de utilizador!'))
})

router.post('/articles',  passport.authenticate('jwtProd', {session: false}), (req, res, next) => {
        var author
        
        if(user.utype==0) author = req.body.author
        else author = req.user.email
        
        var title = req.body.title
        var date = req.body.date
        var content = req.body.content
        ArticleController.insert({title,author,date,content})
                .then(() => res.status(200).send('Article Created'))
                .catch(error => res.status(500).send('Erro na criação de artigo!'))
})

router.post('/articles/update',  passport.authenticate('jwtProd', {session: false}), (req, res, next) => {
        var _id = req.body._id
        var title = req.body.title
        var user = req.user

        var author
        if(user.utype==0) author = req.body.author
        else author = user.email

        var utype = req.user.utype
        
        var date = req.body.date
        var content = req.body.content
        ArticleController.updateArticle(_id,title,author,date,content,utype)
                .then(() => res.status(200).send('Article Updated'))
                .catch(error => res.status(500).send('Erro no update de artigo!'))
})

router.get('/articles/remove/:uid',  passport.authenticate('jwtProd', {session: false}), (req, res, next) => {
        ArticleController.delete(req.params.uid,req.user.email,req.user.utype)
                .then(() => res.status(200).send('Article Removed'))
                .catch(error => res.status(500).send('Erro na remoção de Article!'))
})

// Events Routes
router.get('/events',  passport.authenticate('jwt', {session: false}), (req, res, next) => {
        EventController.list()
            .then( events => {
                res.jsonp(events) 
            })
            .catch(error => res.status(500).send('Error on getting Users'))
})

router.get('/events/top5',  passport.authenticate('jwt', {session: false}), (req, res, next) => {
    EventController.topList()
        .then( articles => {
            res.jsonp(articles) 
        })
        .catch(error => res.status(500).send('Error on getting Users'))
})

router.get('/events/:aid',  passport.authenticate('jwt', {session: false}), (req, res, next) => {
        EventController.getById(req.params.aid)
            .then( event => res.jsonp(event) )
            .catch(error => res.status(500).send('Erro na consulta de utilizador!'))
})


router.post('/events',  passport.authenticate('jwtProd', {session: false}), (req, res, next) => {
        var author
        
        if(req.user.utype==0) author = req.body.author
        else author = req.user.email

        var local = req.body.local
        var theme = req.body.theme
        var description = req.body.description
        var date = req.body.date
        var hour = req.body.hour
        var duration = req.body.duration
        EventController.insert({author,local,theme,description,date,hour,duration})
                .then(() => res.status(200).send('Event Created'))
                .catch(error => res.status(500).send('Erro na criação de evento!'))
})

router.post('/events/update',  passport.authenticate('jwtProd', {session: false}), (req, res, next) => {
        var author
        
        if(user.utype==0) author = req.body.author
        else author = req.user.email

        var utype = req.user.utype
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
})

router.get('/events/remove/:uid',  passport.authenticate('jwtProd', {session: false}), (req, res, next) => {
        EventController.delete(req.params.uid,req.user.email,req.user.utype)
                .then(() => res.status(200).send('Event Removed'))
                .catch(error => res.status(500).send('Erro na remoção de Event!'))
})

// Events Routes
router.get('/works',  passport.authenticate('jwt', {session: false}), (req, res, next) => {
        WorkController.list()
            .then( works => {
                res.jsonp(works) 
            })
            .catch(error => res.status(500).send('Error on getting Users'))
})


router.get('/works/remove/:uid',  passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
        WorkController.delete(req.params.uid)
                .then(() => res.status(200).send('Works Removed'))
                .catch(error => res.status(500).send('Erro na remoção de Works!'))
})


module.exports = router