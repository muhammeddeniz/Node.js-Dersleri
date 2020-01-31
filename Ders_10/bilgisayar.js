var path = require("path");

module.exports.ctrBilgisayar = function(req, res){
    res.sendFile(path.join(__dirname,"bilgisayar.html"));
}