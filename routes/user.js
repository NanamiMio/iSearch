var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('user');
});

router.get('/addSite', function(req, res, next) {
  res.render('addSite',{
    title:'addSite'
  });
});

module.exports = router;
