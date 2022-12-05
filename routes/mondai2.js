var express = require('express');
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
  var by = req.query.byou
  const sql1 = "select mon_ID from mondai_LIST where sentaku = '1';"
  const sql2 = "insert into time_LIST(mon_ID,time) values(?,'1234');"
  const sql3 = "commit";
  const sql4= "update time_LIST set time = ? where time = '1234';"
  connection.query(sql1,(err,result,fields) =>{
    if(err){
      console.log(err);
    }
    var name1 = result[0].mon_ID;
    connection.query(sql2,name1,(err,results2,fields) =>{
      if(err){
        console.log(err);
      }
      connection.query(sql4,by,(err,results3,fields) =>{
        if(err){
          console.log(err);
        }
        connection.query(sql3,(err,results4,fields) =>{
          if(err){
            console.log(err);
          }
        })
      })
    })
  })

  var data1={
    byou1:by
  }
  res.render('mondai3.ejs',data1);
});

module.exports = router;