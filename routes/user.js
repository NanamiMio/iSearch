var express = require('express');
var router = express.Router();

var User = require('./../models/User.js');
var Class = require('./../models/Class.js');

router.get('/', function(req, res, next) {
  var user = req.session.user;
  if (user.name) {
    res.render('user', {
      title: user.name,
      user: user.name
    });
  } else {
    res.render('wrong', {
      title: 'Wrong',
      user: '',
      message: 'Please sign in first.'
    });
  }
});

router.get('/addSite', function(req, res, next) {
  var user = req.session.user;
  var classes = {};
  if (user.name) {
    Class.findAll(function(err, obj) {
      if (err) {
        res.send({
          'success': false,
          'err': err
        });
      }else {
        res.render('addSite', {
          title: 'addSite',
          user: user.name,
          classes: obj
        });
      }
    });
  } else {
    res.render('wrong', {
      title: 'Wrong',
      user: '',
      message: 'Please sign in first.'
    });
  }
});

module.exports = router;
