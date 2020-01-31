var path = require("path");

module.exports.ctrlElektronik = function(req, res){
    res.sendFile(path.join(__dirname,"elektronik.html"));
}