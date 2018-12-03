var router = require('express').Router();
// var eventsRouter = require('./events')

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected to admin!' });
});

// router.use('/events', eventsRouter);

// routes.use('/news', newsRouter);

// routes.use('/calendar', calendarRouter);


module.exports = router;