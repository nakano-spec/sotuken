const express = require('express');
const mysql = require('mysql');
const router = express.Router();
var store = require('store');

router.get('/', function(req, res, next) {
    res.render('login');
  });
  
  module.exports = router;