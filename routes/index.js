var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/login').
  get(function(req, res, next) {
    res.render('login');
  }).
  post(function(req, res, next) {
    res.send('a:'+req.body.account+
             'p:'+req.body.password);
  });


module.exports = router;
