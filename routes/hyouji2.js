const express = require("express");
var router = express.Router();
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "20010426",
    database: "mydb"
});

/* GET users listing. */
router.get('/', function(req, res, next) {
   var s = 'select u.username,k.han from kaitou_LIST k,users u where k.user_ID = u.user_ID;'
   connection.query(s,(err,results,fields)=>{
    //mysqlに接続して持ってきたデータを配列に格納している「results」をhan1という変数にしてhyouji4.ejsファイルに送っている。
    res.render('hyouji4',{han1:results});
   })
});

module.exports = router;