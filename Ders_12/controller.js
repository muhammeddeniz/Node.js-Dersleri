var fs = require("fs");
var path = require("path");

module.exports.controller1 = function(req, res){
    res.render("a1.ejs");
}

module.exports.controller2 = function(req, res){
    res.render("a2.ejs");
}