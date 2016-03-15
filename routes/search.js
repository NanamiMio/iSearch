var express = require('express');
var router = express.Router();

var Site = require('./../models/Site.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log();
  var user = req.session.user;
  Site.search(req.query, function(err, obj){
    res.render('search',{
      title: 'Search',
      user: user.name,
      sites: obj
    });
  });
});

module.exports = router;
