var routes = require('express').Router();
var eventsRouter = require('./events')

routes.use('/events', eventsRouter);

// routes.use('/news', newsRouter);

// routes.use('/calendar', calendarRouter);


module.exports = routes;