var router = require('express').Router();
var eventsRouter = require('./events')

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected to front!' });
});

router.use('/events', eventsRouter);

// routes.use('/news', newsRouter);
// routes.use('/pieces', piecesRouter);


module.exports = router;

