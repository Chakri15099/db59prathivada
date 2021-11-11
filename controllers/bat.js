var bat = require('../models/bat'); 
 
// List of all bat
exports.bat_list = async function(req, res) { 
    try{ 
        thebat = await bat.find(); 
        res.send(thebat); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific bat. 
exports.bat_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: bat detail: ' + req.params.id); 
}; 
 
// Handle bat create on POST. 
exports.bat_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: bat create POST'); 
}; 
 
// Handle bat delete form on DELETE. 
exports.bat_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: bat delete DELETE ' + req.params.id); 
}; 
 
// Handle bat update form on PUT. 
exports.bat_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: bat update PUT' + req.params.id); 
}; 