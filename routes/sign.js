var express = require('express');
var router = express.Router();

var User = require('./../models/User.js');

var iSearch = {
  title: '',
  user: ''
}

router.get('/', function(req, res, next) {
  res.redirect('signup');
});

router.get('/signin', function(req, res, next) {
  var user = req.session.user;
  if (user.name) {
    res.redirect('/');
  } else {
    res.render('signin', {
      title: 'Sign in',
      user: user.name
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
      sess.user = {
        name: obj.name,
        id: obj.id,
        status: obj.status,
        permission: obj.permission
      }
      if (body.Remed) {
        sess.cookie.maxAge = 100000000;
      }
      res.redirect('/');
    } else {
      res.render('wrong', {
        title: 'Wrong',
        user: '',
        message: 'Wrong name or password.'
      });
    }
  });
});

router.get('/signup', function(req, res, next) {
  var user = req.session.user;
  if (user.name) {
    res.redirect('/');
  } else {
    res.render('signup', {
      title: 'Sign up',
      user: user.name,
    });
  }
});

router.post('/signup', function(req, res, next) {
  var user = req.session.user;
  body = req.body;
  obj = {
    'name': body.inputName,
    'pass': body.inputPass
  }
  User.add(obj, function(err, obj) {
    console.log(err);
    if (err) {
      if (err.userexists) {
        res.render('wrong', {
          title: 'Wrong',
          user: '',
          message: 'User Already exists.'
        });
      } else {
        res.send({
          'success': false,
          'err': err
        });
      }
    } else {
      user.name = obj.name;
      user.id = obj.id;
      if (body.Remed) {
        sess.cookie.maxAge = 100000000;
      }
      res.redirect('/');
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
