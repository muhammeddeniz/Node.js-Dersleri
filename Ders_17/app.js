var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended : false}));
var people = [
    {name : "Bill", surname : "Gates"},
    {name : "Steve", surname : "Jobs"},
    {name : "Elon", surname : "Musk"},
]
app.get("/",function(req, res){
    res.sendfile("index.html");
})

app.post("/enter", function(req, res){
    people.push(req.body);
    res.json(people);
    
})

app.listen(8080, function(err){
    if(!err){
        console.log("server başlatıldı . . . ");
    }
})