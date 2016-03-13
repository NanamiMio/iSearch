var express = require('express');
var router = express.Router();

var Site = require('./../models/Site.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log();
  Site.search(req.query, function(err, obj){
    res.send(obj);
  });
});

module.exports = router;
