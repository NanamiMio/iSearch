var express = require('express');
var router = express.Router();

var Class = require('./../models/Class.js');

router.get('/', function(req, res, next) {
  Class.findAll(function(err, obj) {
    if (err) {
      res.send({
        'success': false,
        'err': err
      });
    } else {
      res.render('index', {
        title: 'iSearch',
        user: req.session.user.name,
        classes : obj
      });
    }
  });
});

module.exports = router;
