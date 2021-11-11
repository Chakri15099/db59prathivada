var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bats', { title: 'Search results for bats' });
});

module.exports = router;
