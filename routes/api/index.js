var router = require('express').Router();
var eventsRouter = require('./events')

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected to API!' });
});


router.use('/eventos', eventsRouter);

// routes.use('/noticias', noticias);

// routes.use('/agenda', agenda);


module.exports = router;