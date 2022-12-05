var express = require('express');
var router = express.Router();
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "20010426",
    database: "mydb"
});

/* GET home page. */
router.get('/', function(req, res, next) {
  var name1 = req.query.name;
  const sql = "select name from mondai_LIST;"
  connection.query(sql, (err, result, fields)=>{
      if(err)throw err;
      var data = {
        name: name1,
        web: result
      }
      
      res.render("mondai2", data);
  })
});

module.exports = router;
