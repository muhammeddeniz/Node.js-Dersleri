var http = require("http");
var fs = require("fs");
var ex = require("express");

var app = ex();

app.get("/", function(req, res){
    fs.readFile("index.html", function(err, data){
        res.write(data);
        res.end();
    });

});
app.get("/login", function(req, res){
    fs.readFile("index.html", function(err, data){
        res.write(data);
        res.end("bu login express");
    });
});

app.listen(8080);