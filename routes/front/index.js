var routes = require('express').Router();
var eventosRouter = require('./eventos')

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/eventos', eventos);

// routes.use('/noticias', noticias);

// routes.use('/agenda', agenda);


module.exports = routes;




