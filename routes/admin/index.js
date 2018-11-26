var routes = require('express').Router();
var eventosRouter = require('./eventos')

routes.use('/eventos', eventos);

// routes.use('/noticias', noticias);

// routes.use('/agenda', agenda);


module.exports = routes;