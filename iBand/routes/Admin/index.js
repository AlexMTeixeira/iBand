var express = require('express');
var router = express.Router();
var passport = require('passport')
var axios = require('axios')
var formidable = require('formidable')

// Users Routes
router.get('/users', 
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
    axios.get('http://localhost:8000/api/users/', {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
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
        axios.get('http://localhost:8000/api/users/' + req.params.uid, {
            withCrede1ntials: true,
            headers: {
                'Authorization': 'Bearer ' + req.session.token
            }
        })
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
    axios.get('http://localhost:8000/api/users/activate/' + req.params.uid, {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
    .then( user => res.redirect('/admin/users'))
    .catch( erro => {
        console.log('Erro na ativação de utilizador: ' + erro)
        res.render('error', {error: erro, message: 'Erro na ativação de utilizador'})
    })
})

router.get('/users/deactivate/:uid',
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
    axios.get('http://localhost:8000/api/users/deactivate/' + req.params.uid, {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
    .then( user => res.redirect('/admin/users'))
    .catch( erro => {
        console.log('Erro na desactivação de utilizador: ' + erro)
        res.render('error', {error: erro, message: 'Erro na desactivação de utilizador'})
    })
})

router.get('/users/remove/:uid',
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
    axios.get('http://localhost:8000/api/users/remove/' + req.params.uid, {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
    .then( () => res.redirect('/admin/users'))
    .catch( erro => {
        console.log('Erro na remoção de utilizador: ' + erro)
        res.render('error', {error: erro, message: 'Erro na remoção de utilizador'})
    })
})

router.post('/users/update',
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
    axios.post('http://localhost:8000/api/users/update/', req.body, {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
    .then( () => res.redirect('/admin/users'))
    .catch( erro => {
        console.log('Erro no update de utilizador: ' + erro)
        res.render('error', {error: erro, message: 'Erro no update de utilizador'})
})
})

// Article Routes
router.post('/articles',
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
    axios.post('http://localhost:8000/api/articles/', req.body, {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
    .then( () => res.redirect('/admin/articles'))
    .catch( erro => {
        console.log('Erro na inserção de artigo: ' + erro)
        res.render('error', {error: erro, message: 'Erro na inserção de artigo'})
    })
})

router.get('/articles', 
    passport.authenticate('jwtAdmin', {session : false}), (req, res, next) => {
    axios.get('http://localhost:8000/api/articles/', {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
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
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
    axios.post('http://localhost:8000/api/articles/update/', req.body, {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
        .then( () => res.redirect('/admin/articles'))
    .catch( erro => {
        console.log('Erro no update de artigo: ' + erro)
        res.render('error', {error: erro, message: 'Erro no update de artigo'})
    })
})

router.get('/articles/remove/:uid',
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
    axios.get('http://localhost:8000/api/articles/remove/' + req.params.uid, {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
        .then( () => res.redirect('/admin/articles'))
    .catch( erro => {
        console.log('Erro na remoção de articles: ' + erro)
        res.render('error', {error: erro, message: 'Erro na remoção de articles'})
    })
})

// Events Routes
router.get('/events', 
    passport.authenticate('jwtAdmin', {session : false}), (req, res, next) => {
    axios.get('http://localhost:8000/api/events/', {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
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
    axios.post('http://localhost:8000/api/events/', req.body, {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
        .then(() => res.redirect('/admin/events')) 
        .catch( erro => {
            console.log('Erro na Inserção de evento: ' + erro)
            res.render('error', {error: erro, message: 'My bad...'})
    })
})

router.post('/events/update', 
    passport.authenticate('jwtAdmin', {session : false}), (req, res, next) => {
    axios.post('http://localhost:8000/api/events/update', req.body, {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
        .then( () => res.redirect('/admin/events'))
        .catch( erro => {
            console.log('Erro na Inserção de evento: ' + erro)
            res.render('error', {error: erro, message: 'My bad...'})
    })
})

router.get('/events/:eid', 
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
    axios.get('http://localhost:8000/api/events/' + req.params.eid, {
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

router.get('/events/remove/:uid',
    passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {
    axios.get('http://localhost:8000/api/events/remove/' + req.params.uid, {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
    .then( () => res.redirect('/admin/events'))
    .catch( erro => {
        console.log('Erro na remoção de events: ' + erro)
        res.render('error', {error: erro, message: 'Erro na remoção de events'})
    })
})

// Works Route
router.get('/works', 
    passport.authenticate('jwtAdmin', {session : false}), (req, res, next) => {
    axios.get('http://localhost:8000/api/works/', {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
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
    axios.get('http://localhost:8000/api/works/remove/' + req.params.uid, {
        withCrede1ntials: true,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    })
    .then( () => res.redirect('/admin/works'))
    .catch( erro => {
        console.log('Erro na remoção de obras: ' + erro)
        res.render('error', {error: erro, message: 'Erro na remoção de obras'})
    })
})

router.post('/works',passport.authenticate('jwtAdmin', {session: false}), (req, res, next) => {

    var form = new formidable.IncomingForm()
    var r = JSON.stringify('')
    form.parse(req,(erro,fields,files)=>{
        console.log(files)
      var fenviado = files.file.path
      var fnovo = './public/images/'+files.file.name
      r = JSON.stringify(files.file.name)
      fs.rename(fenviado,fnovo,erro1=>{
        if(!erro1)
          res.json(r)
        else res.render('error', {error:erro1})
      })
    })
  })

// Generel Routes
router.get('/', passport.authenticate('jwtAdmin', {session: false}) , (req, res, next) => {
  res.render('Admin/index')
});


module.exports = router;