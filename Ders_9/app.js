var fs = require("fs");
var ex = require("express");
var app = ex();
var path = require("path");

/*
UZUN YOL =>
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "login.html"));
});


aşağıdaki kodla yukarıdaki kod aynı işi yapmakta
*/

var ctrlFirsPage = function(req, res){
    res.sendFile(path.join(__dirname,"index.html"));
}
var crtlLoginPage = function(req, res){
    res.sendFile(path.join(__dirname, "login.html"));
}

app.get("/", ctrlFirsPage);
app.get("/login", crtlLoginPage);

app.listen(8080);   
