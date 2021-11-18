var express = require('express');
const  bat_controlers= require('../controllers/bats'); 
var router = express.Router();

/* GET bat */ 
router.get('/', bat_controlers.bat_view_all_Page ); 
module.exports = router; 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bats', { title: 'Search results for bats' });
});
/* GET detail bat page */ 
router.get('/detail', bat_controlers.bat_view_one_Page); 

module.exports = router;
