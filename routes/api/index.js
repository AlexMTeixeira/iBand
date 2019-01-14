var router = require('express').Router();
var eventsRouter = require('./events')
var articlesRouter = require('./articles')
var piecesRouter = require('./pieces')

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected to API!' });
});


router.use('/events', eventsRouter);
routes.use('/articles', articlesRouter);
routes.use('/pieces', piecesRouter);



module.exports = router;