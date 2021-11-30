var express = require('express');
const  bat_controlers= require('../controllers/bat'); 
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET bat */ 
router.get('/', bat_controlers.bat_view_all_Page ); 


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bat', { title: 'Search results for bat' });
});
/* GET detail bat page */ 
router.get('/detail', bat_controlers.bat_view_one_Page); 


 /* GET create bat page */ 
router.get('/create',secured, bat_controlers.bat_create_Page); 

/* GET create update page */ 
router.get('/update',secured, bat_controlers.bat_update_Page); 

/* GET create bat page */ 
router.get('/delete',secured, bat_controlers.bat_delete_Page); 

module.exports = router;
