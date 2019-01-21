var express = require('express');
var router = express.Router();
var Event = require('../../controllers/eventController')

// Get all
router.get('/', function(req, res, next) {
    Event.list()
    .then( dados => res.jsonp(dados) )
    .catch( erro => res.status(500).send('Erro na listagem' + erro) )
});

router.get('/:id', function(req, res, next) {
    Event.getById(req.params.id)
    .then( dados => res.jsonp(dados) )
    .catch( erro => res.status(500).send('Erro na consulta' + erro) )
});

router.get('/type/:t', function(req, res, next) {
    Event.listByType(req.params.t)
    .then( dados => res.jsonp(dados) )
    .catch( erro => res.status(500).send('Erro na listagem por tipo' + erro) )
});

router.get('/date', function(req, res, next) {
    if (req.query.exact) {
        Event.listByExactDate(req.params.d)
        .then( dados => res.jsonp(dados) )
        .catch( erro => res.status(500).send('Erro na listagem por data exata' + erro) )
    } else if (req.query.from) {
        Event.listFromDate(req.params.d)
        .then( dados => res.jsonp(dados) )
        .catch( erro => res.status(500).send('Erro na listagem por data' + erro) )
    } else if (req.query.until) {
        Event.listUntilDate(req.params.d)
        .then( dados => res.jsonp(dados) )
        .catch( erro => res.status(500).send('Erro na listagem por data' + erro) )
    }
});

router.post('/', function(req, res, next) {
    Event.insert(req.body)
    .then( dados => res.jsonp(dados) )
    .catch( erro => res.status(500).send('Erro na inserção' + erro) )
});

router.delete('/:id', function (req, res, next) {
    
})

module.exports = router;

