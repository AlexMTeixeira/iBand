var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var passport = require('passport')
var UserModel = require('../../models/user')


router.get('/',passport.authenticate('jwt', {session: false}), (req,res) => {
    UserModel.list()
             .then(dados => res.jsonp(dados))
             .catch(erro = res.status(500).send('Error on getting Users'))
})

router.get('/:uid', passport.authenticate('jwt', {session: false}), (req,res) => {
    UserModel.getUbyEmail(req.params.uid)
            .then(dados => res.jsonp(dados))
            .catch(erro = res.status(500).send('Erro na consulta de utilizador!'))
})

router.post('/', passport.authenticate('registo', {
    session: false,
    successRedirect: '/users/',
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
                const myuser = {_id: user._id, email: user.email}
                const token = jwt.sign({user: myuser}, 'pri2018_iBand')
                req,user.token = token
                req.session.token = token
                res.redirect('/users/'+user.email+'?access_token='+token)
            })
        } catch (error) {
            return next(error)
        }
    }) (req,res,next)
})

module.exports = router