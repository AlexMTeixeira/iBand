var express = require('express');
var router = express.Router();
var passport = require('passport')
var axios = require('axios')

// Users Routes
router.get('/users', 
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
    axios.get('http://localhost:8000/api/users/')
        .then( users => {
            res.render('Admin/users', {users: users.data}
            ) 
        })
        .catch( erro => {
            console.log('Erro na consulta de utilizadores: ' + erro)
            res.render('error', {error: erro, message: 'Erro na consulta de utilizadores'})
        })
})

router.get('/users/:uid', 
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
        axios.get('http://localhost:8000/api/users/' + req.params.uid)
        .then( user => {
            res.render('Admin/user', {user: user.data}
            ) 
        })
        .catch( erro => {
            console.log('Erro na consulta de utilizador: ' + erro)
            res.render('error', {error: erro, message: 'Erro na consulta de utilizador'})
        })
})

router.get('/users/activate/:uid',
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
        axios.get('http://localhost:8000/api/users/activate/' + req.params.uid)
            .then( user => res.redirect('/admin/users'))
        .catch( erro => {
            console.log('Erro na ativação de utilizador: ' + erro)
            res.render('error', {error: erro, message: 'Erro na ativação de utilizador'})
        })
})

router.get('/users/deactivate/:uid',
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
        axios.get('http://localhost:8000/api/users/deactivate/' + req.params.uid)
            .then( user => res.redirect('/admin/users'))
        .catch( erro => {
            console.log('Erro na desactivação de utilizador: ' + erro)
            res.render('error', {error: erro, message: 'Erro na desactivação de utilizador'})
        })
})

router.get('/users/remove/:uid',
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
        axios.get('http://localhost:8000/api/users/remove/' + req.params.uid)
            .then( () => res.redirect('/admin/users'))
        .catch( erro => {
            console.log('Erro na remoção de utilizador: ' + erro)
            res.render('error', {error: erro, message: 'Erro na remoção de utilizador'})
        })
})

router.post('/users/update',
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
        axios.post('http://localhost:8000/api/users/update/', req.body)
            .then( () => res.redirect('/admin/users'))
        .catch( erro => {
            console.log('Erro no update de utilizador: ' + erro)
            res.render('error', {error: erro, message: 'Erro no update de utilizador'})
    })
})

// Article Routes
router.post('/articles',
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
        axios.post('http://localhost:8000/api/articles/', req.body)
            .then( () => res.redirect('/admin/articles'))
        .catch( erro => {
            console.log('Erro na inserção de artigo: ' + erro)
            res.render('error', {error: erro, message: 'Erro na inserção de artigo'})
    })
})

router.get('/articles', 
    passport.authenticate('jwtAdmin', {session : false}), (req, res, next) => {
        axios.get('http://localhost:8000/api/articles/')
        .then( articles => {
            res.render('Admin/articles', {articles: articles.data}
            ) 
        })
        .catch( erro => {
            console.log('Erro na consulta de artigos: ' + erro)
            res.render('error', {error: erro, message: 'My bad...'})
        })
})

router.get('/articles/:aid', 
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
        axios.get('http://localhost:8000/api/articles/' + req.params.aid)
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
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
        axios.post('http://localhost:8000/api/articles/update/', req.body)
            .then( () => res.redirect('/admin/articles'))
        .catch( erro => {
            console.log('Erro no update de artigo: ' + erro)
            res.render('error', {error: erro, message: 'Erro no update de artigo'})
    })
})

router.get('/articles/remove/:uid',
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
        axios.get('http://localhost:8000/api/articles/remove/' + req.params.uid)
            .then( () => res.redirect('/admin/articles'))
        .catch( erro => {
            console.log('Erro na remoção de articles: ' + erro)
            res.render('error', {error: erro, message: 'Erro na remoção de articles'})
        })
})

// Events Routes
router.get('/events', 
    passport.authenticate('jwtAdmin', {session : false}), (req, res, next) => {
        axios.get('http://localhost:8000/api/events/')
        .then( events => {
            res.render('Admin/events', {events: events.data}) 
        })
        .catch( erro => {
            console.log('Erro na consulta de eventos: ' + erro)
            res.render('error', {error: erro, message: 'My bad...'})
        })
})

router.post('/events', 
    passport.authenticate('jwtAdmin', {session : false}), (req, res, next) => {
        axios.post('http://localhost:8000/api/events/', req.body)
            .then(() => res.redirect('/admin/events')) 
            .catch( erro => {
                console.log('Erro na Inserção de evento: ' + erro)
                res.render('error', {error: erro, message: 'My bad...'})
        })
})

router.post('/events/update', 
    passport.authenticate('jwtAdmin', {session : false}), (req, res, next) => {
        axios.post('http://localhost:8000/api/events/update', req.body)
            .then( () => res.redirect('/admin/events'))
            .catch( erro => {
                console.log('Erro na Inserção de evento: ' + erro)
                res.render('error', {error: erro, message: 'My bad...'})
        })
})

router.get('/events/:eid', 
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
        axios.get('http://localhost:8000/api/events/' + req.params.eid)
        .then( article => {
            res.render('Admin/article', {article: article.data}
            ) 
        })
        .catch( erro => {
            console.log('Erro na consulta de artigo: ' + erro)
            res.render('error', {error: erro, message: 'My bad...'})
        })
})

router.get('/events/remove/:uid',
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
        axios.get('http://localhost:8000/api/events/remove/' + req.params.uid)
            .then( () => res.redirect('/admin/events'))
        .catch( erro => {
            console.log('Erro na remoção de events: ' + erro)
            res.render('error', {error: erro, message: 'Erro na remoção de events'})
        })
})

// Works Route
router.get('/works', 
    passport.authenticate('jwtAdmin', {session : false}), (req, res, next) => {
        axios.get('http://localhost:8000/api/works/')
            .then( works => {
                res.render('Admin/works', {works: works.data}) 
            })
            .catch( erro => {
                console.log('Erro na consulta de Obras: ' + erro)
                res.render('error', {error: erro, message: 'My bad...'})
            })
})

router.get('/works/remove/:uid',
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
        axios.get('http://localhost:8000/api/works/remove/' + req.params.uid)
            .then( () => res.redirect('/admin/works'))
        .catch( erro => {
            console.log('Erro na remoção de obras: ' + erro)
            res.render('error', {error: erro, message: 'Erro na remoção de obras'})
        })
})

// Generel Routes
router.get('/', passport.authenticate('jwtAdmin', {session: false}) , (req, res, next) => {
  res.render('Admin/index')
});


module.exports = router;