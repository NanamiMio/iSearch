var express = require('express');
var router = express.Router();

var Site = require('./../models/Site.js');

router.get('/', function(req, res, next) {
  Site.findAll(function(err, obj) {
    if (err) {
      res.send({
        'success': false,
        'err': err
      });
    } else {
      res.send(obj);
    }
  });
});

router.get('/:id', function(req, res, next) {
  Site.findById(req.params.id, function(err, obj) {
    if (err) {
      res.send({
        'success': false,
        'err': err
      });
    } else {
      res.send(obj);
    }
  });
});

router.post('/', function(req, res, next) {
  Site.save(req.body, function(err) {
    if (err) {
      res.send({
        'success': false,
        'err': err
      });
    } else {
      res.send({
        'success': true
      });
    }
  });
});

router.delete('/:id', function(req, res, next) {
  Site.deleteById(req.params.id, function(err) {
    if (err) {
      res.send({
        'success': false,
        'err': err
      });
    } else {
      res.send({
        'success': true
      });
    }
  });
});


router.put('/:id', function(req, res, next) {
  Site.updateById(req.params.id, req.body, function(err) {
    if (err) {
      res.send({
        'success': false,
        'err': err
      });
    } else {
      res.send({
        'success': true
      });
    }
  });
});



module.exports = router;
