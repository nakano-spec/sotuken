var express = require('express');
var router = express.Router();
const mysql = require("mysql");
/*const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "20010426",
    database: "mydb"
});*/

//connection.connect();



/* GET users listing. */
router.get('/', function(req, res, next) {
  var by = req.query.byou
  var app = req.app;
  var poolCluster = app.get("pool");
  var pool = poolCluster.of('SLAVE1');
  const sql1 = "select mon_ID from mondai_LIST where sentaku = '1';"
  const sql2 = "insert into time_LIST(mon_ID,time) values(?,?);"
  const sql3 = "commit";
  const sql4 = "update time_LIST set time = ? where time = '1234';"
  pool.getConnection(function(err,connection) {
    if(err != null){
      console.log(err);
      return;
    }

    connection.query(sql1,(err,result,fields) =>{
      if(err){
        console.log(err);
      }
      var name1 = result[0].mon_ID;
      connection.query(sql2,[name1,by],(err,results2,fields) =>{
        if(err){
          console.log(err);
        }
        connection.commit((err) =>{
          if(err){connection.rollback(() =>{throw console.log('error');});}
        })
      })
    })
    console.log("追加しました。");
    connection.release();
  })
  var data1={
    byou1:by
  }
  res.render('mondai3.ejs',data1);
});

module.exports = router;