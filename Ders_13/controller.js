var fs = require("fs");
var path = require("path");
 

module.exports.aController = function(req, res){
    res.render("b");
}

module.exports.bController = function(req, res){

    res.render("anaSayfa", {data : "merhaballar efem nasılsınız..."});
}
