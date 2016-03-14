var express = require('express');
var router = express.Router();

var User = require('./../models/User.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('user');
});

router.get('/addSite', function(req, res, next) {
  res.render('addSite', {
    title: 'addSite'
  });
});

router.get('/signin', function(req, res, next) {
  var sess = req.session;
  if (sess.userName) {
    res.redirect('/');
  } else {
    res.render('signin', {
      title: 'Sign in',
      user: req.session.userName
    });
  }
});

router.post('/signin', function(req, res, next) {
  var sess = req.session,
    body = req.body;
  User.Verificate(body.inputName, body.inputPass, function(err, obj) {
    if (err) {
      res.send({
        'success': false,
        'err': err
      });
    } else if (obj) {
      sess.userName = obj.name;
      sess.userId = obj.id;
      if (body.Remed) {
        sess.cookie.maxAge = 100000000;
      }
      res.redirect('/');
    } else {
      res.send({
        'success': false,
        'err': 'Wrong'
      })
    }
  });
});

router.get('/signup', function(req, res, next) {
  var sess = req.session;
  if (sess.userName) {
    res.redirect('/');
  } else {
    res.render('signup', {
      title: 'Sign up',
      user: req.session.userName,
    });
  }
});

router.post('/signup', function(req, res, next) {
  var sess = req.session,
    body = req.body;
  obj = {
    'name': body.inputName,
    'pass': body.inputPass
  }
  User.add(obj, function(err, obj) {
    if (err) {
      res.send({
        'success': false,
        'err': err
      });
    } else {
      console.log(obj);
      sess.userName = obj.name;
      sess.userId = obj.id;
      if (body.Remed) {
        sess.cookie.maxAge = 100000000;
      }
      res.send({
        'success': true
      });
    }
  });
});

router.get('/signout', function(req, res, next) {
  req.session.destroy(function(err) {
    if (err) {
      res.send({
        'success': false,
        'err': err
      });
    } else {
      res.redirect('/');
    }
  })
});

module.exports = router;
