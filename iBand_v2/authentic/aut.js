var passport = require('passport')
var localStrategy = require('passport-local').Strategy
var UserModel = require('../models/user')

// Registo do utilizador
passport.use('registo', new localStrategy ({
    usernameField: 'email',
    passwordField: 'password',
    nameField: 'name',
    utypeField: 'utype',
    validField: 'valid'
}, async (email, password, name, utype, done) => {
    try {
        user = await UserModel.create({email, password, name, utype, valid: false})
        return done(null, user)
    }
    catch(erro) {
        return done(erro)
    }
}))

// Login de utilizadores
passport.use('login', new localStrategy ({
    usernameField: 'email',
    passwordField: 'password',
    validField: 'valid'
}, async (email, password, valid, done) => {
    try {
        user = await UserModel.findOne({email})
        if(!user) return done(null,false, {message: "Utilizador não encontrado!"})
        
        var verify = await user.isvalidPassword(password)
        if(!verify) return done(null, false, {message: "Password inválida!"}) 

        var validated = user.valid
        if(!validated) return done(null,false,{message: "User not autenticated by Admin!"})

        return done(null, user, {message: "Utilizador Autenticado!"})
    }
    catch(erro) {
        return done(erro)
    }
}))

// Verificação do Token
var JWTstrategy = require('passport-jwt').Strategy
var ExtractJWT = require('passport-jwt').ExtractJwt

var extractFromSession = (req) => {
    var token = null
    if(req && req.session) token = req.session.token
    return token
}

passport.use('jwt', new JWTstrategy({
    secretOrKey: "pri2018_iBand",
    jwtFromRequest: ExtractJWT.fromExtractors([extractFromSession])
}, async (token,done) => {
    try{
        return done(null, token.user)
    }
    catch (erro) {
        return done(erro)
    }
}))
