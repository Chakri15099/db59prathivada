var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var bat_controller = require('../controllers/bats'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// bat ROUTES /// 
 
// POST request for creating a bat.  
router.post('/batS', bat_controller.bat_create_post); 
 
// DELETE request to delete bat. 
router.delete('/bat/:id', bat_controller.bat_delete); 
 
// PUT request to update bat. 
router.put('/batS/:id',bat_controller.bat_update_put); 
 
// GET request for one bat. 
router.get('/bat/:id', bat_controller.bat_detail); 
 
// GET request for list of all bat items. 
router.get('/bat', bat_controller.bat_list); 
 
module.exports = router; 