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
//VIEWS 
// Handle a show all view 
exports.bat_view_all_Page = async function(req, res) { 
    try{ 
        thebat = await bat.find(); 
        res.render('bats', { title: 'bat Search Results', results: thebat }); 
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
 
// Handle Costume create on POST. 
exports.bat_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new bat(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.brand = req.body.brand; 
    document.types = req.body.types; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle bat delete form on DELETE. 
exports.bat_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: bat delete DELETE ' + req.params.id); 
}; 
 
// Handle bat update form on PUT. 
exports.bat_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: bat update PUT' + req.params.id); 
}; 