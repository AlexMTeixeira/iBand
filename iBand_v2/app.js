var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs=require('fs')

var mongoose = require('mongoose');
var uuid = require('uuid/v4')
var session = require('express-session')
var FileStore = require('session-file-store')(session)
var passport = require('passport')


require('./authentic/aut');

var APIRouter   = require('./routes/api/index')
var adminRouter = require('./routes/Admin/index')
var frontRouter = require('./routes/Front/index')


var app = express();

// Base de dados
mongoose.connect('mongodb://127.0.0.1:27017/iBand', {useNewUrlParser: true})
      .then(()=> console.log("Mongo ready: " + mongoose.connection.readyState))
      .catch(erro => console.log("Erro de conexão: " + erro))

var WorkController=require('./controllers/workController')
fs.readFile('./public/sheets/json/iBanda-SIP.json','utf8',(err,content)=>{

  if(err) {
    console.log('err'+err)
    return err;
  }
  else{
    var path = "./public/sheets/json/"
    var temp = JSON.parse(content)
    var lst = temp.files
    lst.forEach((str)=>{
      var up = path+str+'.json'
      fs.readFile(up,(err,dat)=>{
        var temp2 = JSON.parse(dat)
        var instrLst = temp2.instrumentos
        var title = temp2.titulo
        WorkController.getByTitle(title)
                .then(result =>{
                  if(result==null){
                    WorkController
                    .insert({title:title,instruments:[]})
                    .then(
                      instrLst.forEach((instr)=>{
                        var spl = instr.partitura.path.split('-')
                        var folder = spl[0]
              
                        fs.readFile('./public/sheets/iBanda-PDFs/'+folder+'/'+instr.partitura.path,(err,pdf)=>{
                          if(err) console.log('Ficheiro nao existe')
                          else {
                           
                            var name = instr.nome
                            var sheetPath = instr.partitura.path
                            var tone
                            if (instr.partitura.voz)
                               tone = instr.partitura.voz
                            else tone = "Undef"
                            var prod = {name,sheetPath,tone}
                            
                            WorkController.insertInto(title,prod)
                                .then(res => console.log('updated! '+ JSON.stringify(res)))
                                .catch(err => console.log(err))
                          }
                        })
                      })
                      
                    )
                    .catch(err => console.log(err))
                  }})
                  .catch(err => console.log(err))
        
      })
    })
  }
})
//Passport Autentication
app.use(session({
  genid: req => {
    return uuid()},
  store: new FileStore(),
  secret: 'O meu segredo',
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Use of Routes
app.use('/api',APIRouter)
app.use('/admin', adminRouter);
app.use('/', frontRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;