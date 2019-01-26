var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var passport = require('passport')
var UserController = require('../../controllers/usersController')

router.get('/',passport.authenticate('jwt', {session: false}), (req,res) => {
    console.log('on get users/')
    UserController.list()
             .then(dados => {
                 console.log(dados)
                 res.jsonp(dados)
             })
             .catch(erro = res.status(500).send('Error on getting Users'))
})

router.get('/:uid', passport.authenticate('jwt', {session: false}), (req,res) => {
    UserController.getUbyEmail(req.params.uid)
            .then(dados => res.jsonp(dados))
            .catch(erro = res.status(500).send('Erro na consulta de utilizador!'))
})

router.post('/', passport.authenticate('registo', {
    session: false,
    successRedirect: '/',
    failureRedirect: '/'
}))

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

module.exports = router