var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var passport = require('passport')
var UserController = require('../../controllers/usersController')
var ArticleController = require('../../controllers/articleController')

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
router.get('/users', (req,res) => {
        UserController.list()
            .then(users => {
                res.jsonp(users)
            })
            .catch(erro => res.status(500).send('Error on getting Users'))
})

router.get('/users/:uid', (req,res) => {
    UserController.getById(req.params.uid)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).send('Erro na consulta de utilizador!'))
})

// Articles Routes
router.get('/articles', (req,res) => {
    console.log('in api router')
    ArticleController.list()
        .then( articles => {
            res.jsonp(articles) 
        })
        .catch(erro => res.status(500).send('Error on getting Users'))
})

router.get('/articles/:aid', (req,res) => {
    ArticleController.getById(req.params.aid)
        .then( article => res.jsonp(article))
        .catch(erro => res.status(500).send('Erro na consulta de utilizador!'))
})














































module.exports = router