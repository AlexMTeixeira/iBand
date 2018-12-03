var passport = require('passport')
var router = require('express').Router();
var frontRouter = require('./front/index')
var adminRouter = require('./admin/index')
var apiRouter = require('./api/index')

router.post('/login', passport.authenticate('local', { 
    successRedirect: '/protegida', 
    successFlash: 'Utilizador autenticado com sucesso!', 
    failureRedirect: '/login', 
    failureFlash: 'Utilizador ou password inválido(s)...' 
}))

router.use('/api', apiRouter);

router.use('/admin', adminRouter);

router.use('/', frontRouter);


module.exports = router;