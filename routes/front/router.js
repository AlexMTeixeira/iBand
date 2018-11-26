var express = require('express');
var router = express.Router();
var axios = require('axios')

var eventosRouter = require('./eventos')

router.get('/', function(req, res, next) {
    res.render('index')
});

router.get

