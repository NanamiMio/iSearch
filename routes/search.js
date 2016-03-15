var express = require('express');
var router = express.Router();

var Site = require('./../models/Site.js');

router.get('/', function(req, res, next) {
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
