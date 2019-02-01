var express = require('express');
var router = express.Router();
var passport = require('passport')
var axios = require('axios')

// General Routes

/* GET User Page. */
router.get('/', passport.authenticate('jwt', {session: false}), (req,res,next) => {
    console.log(req.user)
    res.render('Front/index', {user: req.user});
});

router.get('/logout', passport.authenticate('jwt', {session: false}), (req,res,next) => {
    req.session.destroy(err => {
        res.redirect('/');
    })
})



// Article Routes
router.get('/articles/top5', 
    passport.authenticate('jwt', {session : false}), (req, res, next) => {
        axios.get('http://localhost:8000/api/articles/top5', {
            withCrede1ntials: true,
            headers: {
                'Authorization': 'Bearer ' + req.session.token
            }
        })
        .then( articles => {
            res.render('Front/newsList', {articles: articles.data}
            ) 
        })
        .catch( erro => {
            console.log('Erro na consulta de artigos: ' + erro)
            res.render('error', {error: erro, message: 'My bad...'})
        })
})

router.get('/articles', 
    passport.authenticate('jwt', {session : false}), (req, res, next) => {
    axios.get('http://localhost:8000/api/articles/', {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
    .then( articles => {
        res.render('Front/articles', {articles: articles.data, user: req.user}
        ) 
    })
    .catch( erro => {
        console.log('Erro na consulta de artigos: ' + erro)
        res.render('error', {error: erro, message: 'My bad...'})
    })
})


router.post('/articles',
    passport.authenticate('jwtProd', {session: false}), (req, res, next) => {
    axios.post('http://localhost:8000/api/articles/', req.body, {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
    .then( () => res.redirect('/user/articles'))
    .catch( erro => {
        console.log('Erro na inserção de artigo: ' + erro)
        res.render('error', {error: erro, message: 'Erro na inserção de artigo'})
    })
})

router.get('/articles/:aid', 
    passport.authenticate('jwt', {session: false}), (req, res, next) => {
    axios.get('http://localhost:8000/api/articles/' + req.params.aid, {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
    .then( article => {
        res.render('Admin/article', {article: article.data}
        ) 
    })
    .catch( erro => {
        console.log('Erro na consulta de artigo: ' + erro)
        res.render('error', {error: erro, message: 'My bad...'})
    })
})

router.post('/articles/update',
    passport.authenticate('jwtProd', {session: false}), (req, res, next) => {
    axios.post('http://localhost:8000/api/articles/update/', req.body, {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
        .then( () => res.redirect('/user/articles'))
    .catch( erro => {
        console.log('Erro no update de artigo: ' + erro)
        res.render('error', {error: erro, message: 'Erro no update de artigo'})
    })
})

router.get('/articles/remove/:uid',
    passport.authenticate('jwtProd', {session: false}), (req, res, next) => {
    axios.get('http://localhost:8000/api/articles/remove/' + req.params.uid, {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
        .then( () => res.redirect('/user/articles'))
    .catch( erro => {
        console.log('Erro na remoção de articles: ' + erro)
        res.render('error', {error: erro, message: 'Erro na remoção de articles'})
    })
})


// Events Routes
router.get('/events/top5', 
    passport.authenticate('jwt', {session : false}), (req, res, next) => {
        axios.get('http://localhost:8000/api/events/top5', {
            withCrede1ntials: true,
            headers: {
                'Authorization': 'Bearer ' + req.session.token
            }
        })
        .then( events => {
            res.render('Front/eventsList', {events: events.data}
            ) 
        })
        .catch( erro => {
            console.log('Erro na consulta de eventos: ' + erro)
            res.render('error', {error: erro, message: 'My bad...'})
        })
})

router.get('/events', 
    passport.authenticate('jwt', {session : false}), (req, res, next) => {
    axios.get('http://localhost:8000/api/events/', {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
    .then( events => {
        res.render('Front/events', {events: events.data, user: req.user}) 
    })
    .catch( erro => {
        console.log('Erro na consulta de eventos: ' + erro)
        res.render('error', {error: erro, message: 'My bad...'})
    })
})

router.post('/events', 
    passport.authenticate('jwtProd', {session : false}), (req, res, next) => {
    axios.post('http://localhost:8000/api/events/', req.body, {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
        .then(() => res.redirect('/user/events')) 
        .catch( erro => {
            console.log('Erro na Inserção de evento: ' + erro)
            res.render('error', {error: erro, message: 'My bad...'})
    })
})

router.post('/events/update', 
    passport.authenticate('jwtProd', {session : false}), (req, res, next) => {
    axios.post('http://localhost:8000/api/events/update', req.body, {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
        .then( () => res.redirect('/user/events'))
        .catch( erro => {
            console.log('Erro na Inserção de evento: ' + erro)
            res.render('error', {error: erro, message: 'My bad...'})
    })
})


router.get('/events/remove/:uid',
    passport.authenticate('jwtProd', {session: false}), (req, res, next) => {
    axios.get('http://localhost:8000/api/events/remove/' + req.params.uid, {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
    .then( () => res.redirect('/user/events'))
    .catch( erro => {
        console.log('Erro na remoção de events: ' + erro)
        res.render('error', {error: erro, message: 'Erro na remoção de events'})
    })
})

// Works Route
router.get('/works', 
    passport.authenticate('jwt', {session : false}), (req, res, next) => {
    axios.get('http://localhost:8000/api/works/', {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
    .then( works => {
        res.render('Front/works', {works: works.data, user: req.user}) 
    })
    .catch( erro => {
        console.log('Erro na consulta de Obras: ' + erro)
        res.render('error', {error: erro, message: 'My bad...'})
    })
})



module.exports = router;