var app = require("express")();
var path = require("path");

app.set("views", path.join(__dirname, "/views"));

app.get("/", function(req, res){
    var htmlS = "<div class='alert alert-primary' role='alert'>"+
    "A simple primary alert—check it out!</div>";
    res.render("index.ejs" ,{
        dataHtml : htmlS,
        dataString : htmlS

    })
})

app.listen(8080);