var express = require('express');
var router = express.Router();

var Site = require('./../models/Site.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  Site.findAll(function(err, obj) {
    if (err) {
      res.send({
        'success': false,
        'err': err
      });
    } else {
      res.render('index', {
        title: 'iSearch',
        user: req.session.user.name,
        Sites : obj
      });
    }
  });
});

module.exports = router;
