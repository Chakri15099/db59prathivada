var express = require('express');
const  bat_controlers= require('../controllers/bat'); 
var router = express.Router();

/* GET bat */ 
router.get('/', bat_controlers.bat_view_all_Page ); 


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bat', { title: 'Search results for bat' });
});
/* GET detail bat page */ 
router.get('/detail', bat_controlers.bat_view_one_Page); 


 /* GET create bat page */ 
router.get('/create', bat_controlers.bat_create_Page); 

/* GET create update page */ 
router.get('/update', bat_controlers.bat_update_Page); 

module.exports = router;
