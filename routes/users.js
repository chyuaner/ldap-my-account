var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/:user_id', function(req, res, next) {
  res.render('mypage', { user_id: req.params.user_id,
                         user_name: req.params.user_id });
});

module.exports = router;
