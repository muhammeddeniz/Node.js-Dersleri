var express = require("express");
var app = express();
var path = require("path");

app.set("views", path.join(__dirname, "/views"));

app.get("/", function(req, res){
    res.render("index.ejs", {
        data : "Muhammed Deniz"
    })
})

app.listen(8080);