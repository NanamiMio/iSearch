var express = require('express');
var router = express.Router();

var Site = require('./../models/Site.js');
var User = require('./../models/User.js');

router.get('/', function(req, res, next) {
  var user = req.session.user;
  if(user.permission >= 20){
    Site.findAll(function(err, obj) {
      if (err) {
        res.send({
          'success': false,
          'err': err
        });
      } else {
        res.render('admin', {
          title: 'Admin',
          user: user.name,
          sites : obj
        });
      }
    });
  } else{
    res.send('No permission');
  }
});

router.get('/sites', function(req, res, next) {
  var user = req.session.user;
  if(user.permission >= 20){
    Site.findAll(function(err, obj) {
      if (err) {
        res.send({
          'success': false,
          'err': err
        });
      } else {
        res.render('adminSites', {
          title: 'Sites|Admin',
          user: user.name,
          sites : obj
        });
      }
    });
  } else{
    res.send('No permission');
  }
});

router.get('/users', function(req, res, next) {
  var user = req.session.user;
  if(user.permission >= 20){
    User.findAll(function(err, obj) {
      if (err) {
        res.send({
          'success': false,
          'err': err
        });
      } else {
        res.render('adminUsers', {
          title: 'Users|Admin',
          user: user.name,
          users : obj
        });
      }
    });
  } else{
    res.send('No permission');
  }
});

router.get('/classes', function(req, res, next) {
  var user = req.session.user;
  if(user.permission >= 20){
    Site.findAll(function(err, obj) {
      if (err) {
        res.send({
          'success': false,
          'err': err
        });
      } else {
        res.render('adminClasses', {
          title: 'Classes|Admin',
          user: user.name,
          classes : obj
        });
      }
    });
  } else{
    res.send('No permission');
  }
});

router.get('/editSite/:id', function(req, res, next) {
  var user = req.session.user;
  if(user.permission >= 20){
    Site.findById(req.params.id,function(err, obj) {
      if (err) {
        res.send({
          'success': false,
          'err': err
        });
      } else {
        res.render('editSite', {
          title: 'editSite',
          user: user.name,
          site : obj
        });
      }
    });
  } else{
    res.send('No permission');
  }
});

router.get('/editUser/:id', function(req, res, next) {
  var user = req.session.user;
  if(user.permission >= 20){
    User.findById(req.params.id,function(err, obj) {
      if (err) {
        res.send({
          'success': false,
          'err': err
        });
      } else {
        res.render('editUser', {
          title: 'Edit|User|Admin',
          user: user.name,
          userr : obj
        });
      }
    });
  } else{
    res.send('No permission');
  }
});


module.exports = router;
