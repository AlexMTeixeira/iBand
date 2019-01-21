var express = require('express')
var passport = require('passport')
var jwt = require('jsonwebtoken')
var router = express.Router()
var UserModel = require('../../models/userModel')

router.get('/:uid', passport.authenticate('jwt', {session: false}), (req, res) => {
    UserModel.findOne({email : req.params.uid})
        .then(dados => res.json(dados))
        .catch(erro => res.status(500).send('Error getting user'))
})

router.post('/', passport.authenticate('register', {
    session: false,
    successRedirect: '/users/login',
    failureRedirect: '/users'
}))

router.post('/login', async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if (err || !user) {
                const error = new Error('An Error occurred')
                return next(error)
            }
            req.login(user, {session: false}, async (erro) => {
                if (erro) return next(erro)
                var myUser = { _id : user._id, email : uwser.email }

                // Geração de token
                var token = jwt.sign({ user : myUser }, 'iBand')
                req.session.token = token
                res.redirect('/users/' + user.email + '?access_token=' + token)
            })
        } catch (erro) {
            return next(erro)
        }
    }) (req, res, next)
})

module.exports = router