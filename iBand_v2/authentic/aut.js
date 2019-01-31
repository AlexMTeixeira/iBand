var passport = require('passport')
var localStrategy = require('passport-local').Strategy
var UserController = require('../controllers/usersController')

// Registo do utilizador
passport.use('registo', new localStrategy ({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
}, async (req, email, password, done) => {
    try {
        if (typeof email === "undefined" && !email)
            throw new Error ("Email não definido")
        if (typeof password === "undefined" && !password)
            throw new Error ("Password não definida")
        if (typeof req.body.name === "undefined" && !req.body.name)
            throw new Error ("Nome não definido")
        if (typeof req.body.utype === "undefined" && !req.body.utype)
            throw new Error ("Tipo não definido")

        let name = req.body.name
        let utype = req.body.utype
        let valid = req.body.valid
        if(typeof req.body.valid === "undefined" && !req.body.valid)
            valid = false

        let user = await UserController.insert({email, password, name, utype, valid})

        if (!user)
            throw new Error("Erro a criar utilizador!")

        return done(null, user)
    }
    catch(erro) {
        return done(erro,false, {message: erro})
    }
}))

// Login de utilizadores
passport.use('login', new localStrategy ({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        if (typeof email === "undefined" && !email) 
            throw new Error ("Email não definido")
        if (typeof password === "undefined" && !password)
            throw new Error ("Password não definida")
    
        user = await UserController.validatePassword(email, password)

        if(user.valid == false) {
            throw new Error ("Não validado pelo Moderador")
        }

        return done(null, user, {message: "Utilizador Autenticado!"})
    }
    catch(erro) {
        return done(erro,false, {message: erro})
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
    } catch (erro) {
        return done(erro)
    }
}))

passport.use('jwtAdmin', new JWTstrategy({
    secretOrKey: "pri2018_iBand",
    jwtFromRequest: ExtractJWT.fromExtractors([extractFromSession])
}, async (token,done) => {
    try{
        if(token.user.utype == 0)
            return done(null, token.user)
        else
            return done(null, false, {message: "Access restricted!"})
    } catch (erro) {
        return done(erro)
    }
}))

passport.use('jwtProd', new JWTstrategy({
    secretOrKey: "pri2018_iBand",
    jwtFromRequest: ExtractJWT.fromExtractors([extractFromSession])
}, async (token,done) => {
    try{
        if(token.user.utype != 2)
            return done(null, token.user)
        else
            return done(null, false, {message: "Access restricted!"})
    } catch (erro) {
        return done(erro)
    }
}))