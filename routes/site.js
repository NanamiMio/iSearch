var express = require('express');
var router = express.Router();

var Site = require('./../models/Site.js');

router.get('/', function(req, res, next) {
  res.send('site');
});

router.get('/add', function(req, res, next) {
  if(req.params.name){//update
    return res.render('site', {
      title:req.params.name+'|网站|管理|iSearch',
      label:'编辑网站:'+req.params.name,
      site:req.params.name
    });
  } else {
    return res.render('site',{
      title:'新增加|网站|管理|iSearch',
      label:'新增加网站',
      site:false
    });
  }
});

router.post('/add', function(req, res, next) {
  console.log(req.body.content);
  var json = req.body.content;
    Site.save(json,function(err){
      if(err) {
        res.send({'success':false,'err':err});
      } else {
        res.send({'success':true});
      }
    });
});

module.exports = router;