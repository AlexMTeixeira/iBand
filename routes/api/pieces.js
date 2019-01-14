var express = require('express');
var router = express.Router();
var Article = require('../../controllers/articleController')

// Get all
router.get('/', function(req, res, next) {
    Article.list()
    .then( dados => res.jsonp(dados) )
    .catch( erro => res.status(500).send('Erro na listagem' + erro) )
});

router.get('/:id', function(req, res, next) {
    Article.getById(req.params.id)
    .then( dados => res.jsonp(dados) )
    .catch( erro => res.status(500).send('Erro na consulta' + erro) )
});

router.get('/date', function(req, res, next) {
    if (req.query.exact) {
        Article.listByExactDate(req.params.d)
        .then( dados => res.jsonp(dados) )
        .catch( erro => res.status(500).send('Erro na listagem por data exata' + erro) )
    } else if (req.query.from) {
        Article.listFromDate(req.params.d)
        .then( dados => res.jsonp(dados) )
        .catch( erro => res.status(500).send('Erro na listagem por data' + erro) )
    } else if (req.query.until) {
        Article.listUntilDate(req.params.d)
        .then( dados => res.jsonp(dados) )
        .catch( erro => res.status(500).send('Erro na listagem por data' + erro) )
    }
});

router.get('/author/:a', function(req, res, next) {
    Article.listByAuthor(req.params.a)
    .then( dados => res.jsonp(dados) )
    .catch( erro => res.status(500).send('Erro na listagem por data' + erro) )
});

router.post('/', function(req, res, next) {
    Article.insert(req.body)
    .then( dados => res.jsonp(dados) )
    .catch( erro => res.status(500).send('Erro na inserção' + erro) )
});

router.delete('/:id', function (req, res, next) {
    Article.deleteById(req.body)
    .then( dados => res.jsonp(dados) )
    .catch( erro => res.status(500).send('Erro na inserção' + erro) )
})

module.exports = router;