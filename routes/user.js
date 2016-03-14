var express = require('express');
var router = express.Router();

var User = require('./../models/User.js');

var iSearch = {
  title: '',
  user: ''
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  var user = req.session.user;
  if (user.name) {
    res.render('user', {
      title: user.name,
      user: user.name
    });
  } else {
    res.send('Please sign in first.')
  }
});

router.get('/addSite', function(req, res, next) {
  var user = req.session.user;
  if (user.name) {
    res.render('addSite', {
      title: 'addSite',
      user: user.name
    });
  } else {
    res.send('Please sign in first.')
  }
});

module.exports = router;
