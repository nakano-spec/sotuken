var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    var name1 = req.query.name;
    var data ={
        name: name1 
    }
  res.render('kaitou.ejs',data);
});

module.exports = router;