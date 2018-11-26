var routes = require('express').Router();
var eventsRouter = require('./events')

routes.use('/eventos', eventsRouter);

// routes.use('/noticias', noticias);

// routes.use('/agenda', agenda);


module.exports = routes;