var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("index.ejs");
})

app.post("/login", function(req, res){{    
    res.render("index.ejs", {
        dataAdi : req.body.ad,
        dataSifre : req.body.sifre
    });
}})


app.listen(8080);