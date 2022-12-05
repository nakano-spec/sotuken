const express = require("express");
var router = express.Router();
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "20010426",
    database: "mydb"
});

router.get("/", (req, res)=>{
    var name2 = req.query.name;
    const sql = "select * from mondai_LIST where sentaku = '1';"
    const sql2 ="select f.kai_keisiki from kaikeisiki_LIST f,mondai_LIST m where f.kai_ID = m.kai_ID and m.sentaku = '1';"
    const sql3 = "select mondaibun from mondai_LIST where sentaku = '1';"
    connection.query(sql2,(err,result2,field)=>{
        console.log(result2[0].kai_keisiki == "入力");
        if(err){
            console.log(err);
        }
        if(result2.kai_keisiki == "選択"){
          connection.query(sql, (err, result, fields)=>{
          if(err){
            res.render("kaitou");
          };
          var data={
            name: name2,
            web: result
          }
          res.render("kaitou2",data);
        })
        }else if(result2[0].kai_keisiki == "入力"){
            connection.query(sql3,(err,result3,fields)=>{
                if(err){
                    console.log(err);
                }
                var data1={
                    name:name2,
                    web: result3
                }
                res.render('kaitou4',data1);
            })
        }else{
            console.log("ありませんでした。");
        }
        
    })
    
})

module.exports = router;