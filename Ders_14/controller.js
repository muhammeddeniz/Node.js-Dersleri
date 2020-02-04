var path = require("path");
var fs = require("fs");

module.exports.conrollera= function(req, res){
    res.render("a.ejs", {data1 : "Bilgisayar Mühendisliği data1"});
}

module.exports.conrollerb = function(req, res){
    res.render("b.ejs", {data2: "Bilgisayar Mühendisliği data2"});
}