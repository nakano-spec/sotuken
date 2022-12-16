var express = require('express');
var router = express.Router();
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "20010426",
    database: "mydb"
});
connection.connect();

/* GET users listing. */
router.get('/', function(req, res, next) {
   var data1 = req.query.data
   var sql4 = "select * from mondai_LIST where name = ?;"
   connection.query(sql4,data1,(err,result,fields) =>{
    if(err){
        console.log(err);
    }
    res.render('kakunin.ejs',{data:result});
    connection.end();
   })
});

module.exports = router;