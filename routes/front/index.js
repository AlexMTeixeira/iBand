var routes = require('express').Router();
var eventsRouter = require('./events')

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/events', eventsRouter);

// routes.use('/noticias', noticias);

// routes.use('/agenda', agenda);


module.exports = routes;




