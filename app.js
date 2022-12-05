//node.jsのインストールしたパッケージを読み出している。
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ExcelJS = require('exceljs');
var validator = require('validator');
var multer = require('multer');
var cors = require('cors');

//パス情報を変数に格納している。
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var helloRouter = require('./routes/hello');
var newplayerRouter = require('./routes/new_player');
var mondaiRouter = require('./routes/mondai');
var hyoujiRouter = require('./routes/hyouji');
var kaitouRouter = require('./routes/kaitou1');
var kaitou2Router = require('./routes/kaitou2');
var hyouji2Router = require('./routes/hyouji1');
var mondai2Router = require('./routes/mondai2');
var kaitou3Router = require('./routes/kaitou3');
var mondai3Router = require('./routes/mondai3');
var hyouji3Router = require('./routes/hyou');
var hyouji4Router = require('./routes/hyouji2');
var kakuninRouter = require('./routes/kakunin');
var tuikaRouter = require('./routes/tuika');
var failRouter = require('./routes/fail');
var kanryouRouter = require('./routes/kanryou');
var missRouter = require('./routes/miss');
var uploadRouter = require('./routes/upload.js')

const router = require('./routes/index');
//読み込んだexpressをapp変数に格納
var app = express();

//ejsを使えるようにしている。
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(express.static('images'));

//パスを読み込み、ページを移動する際に使用する。
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hello',helloRouter);
app.use('/new_player',newplayerRouter);
app.use('/login',loginRouter);
app.use('/mondai',mondaiRouter);
app.use('/h',hyoujiRouter);
app.use('/kaitou',kaitouRouter);
app.use('/kaitou2',kaitou2Router);
app.use('/hyouji2',hyouji2Router);
app.use('/mondai2',mondai2Router);
app.use('/kaitou3',kaitou3Router);
app.use('/mondai3',mondai3Router);
app.use('/hyou3',hyouji3Router);
app.use('/hyou4',hyouji4Router);
app.use('/kakunin',kakuninRouter);
app.use('/tuika',tuikaRouter);
app.use('/fail',failRouter);
app.use('/kanryou',kanryouRouter);
app.use('/miss',missRouter);
app.use('/upload',uploadRouter);


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

//受け取ったファイルを記録する。
app.post('/upload',multer({ dest:'./public/images/' } ).single('file'),function(req,res,next){
  console.log(req.file);
  res.send('ファイルのアップロードが完了しました。');
})

app.use(cors());
module.exports = app;


