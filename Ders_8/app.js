var fs = require("fs");
var ex = require("express");
var path = require("path");
var app = ex();

app.use("/public", ex.static(path.join(__dirname, "public")));

app.get("/",function(req,res){
    fs.readFile("index.html", function(err, data){
        res.write(data);
        res.end("first page");
    });
})

app.get("/login", function(req, res){
    fs.readFile("index.html", function(err, data){
        res.write(data);
        res.end("login page");
    });
})



app.listen(8080);

console.log("Server Started...");