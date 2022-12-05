var express = require('express');
var router = express.Router();
const mysql = require("mysql");
//mysqlに接続する際のデータを入れ、接続できるようにする。
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "20010426",
    database: "mydb"
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    //URLのパラメータの中にあるクエリパラメータを解析して変数に格納する。
   var data1 = req.query.data

    //変数にSQL文を格納している。？は値を自由に入れられる場所。
   var sql4 = "select u.username,k.kai from kaitou_LIST k,users u where u.user_ID = k.user_ID and u.username = ?;"

   //mysqlにつなげて「sql4」に格納されたSQL文を起動してデータを持ってくる。
   //持ってきたデータは「result」に入る。「err」には接続した際にエラーがあった場合エラー情報がここに入る。
   //「data1」変数の格納された値は「sql4」変数の中の ?の部分に入る。
   //※この接続方法で入れられる数は３つです。それ以上入れたい場合は()で囲みましょう。(err,result,fieldのように)
   connection.query(sql4,data1,(err,result,fields) =>{
    res.render('hyouji3',{data:result});
   })
   
});

module.exports = router;