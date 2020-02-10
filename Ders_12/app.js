var app = require("express")();
var router = require("./controller");
var path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/index"));

app.use("/bir",router.controller1);
app.use("/iki",router.controller2);

app.listen(8080, function(err){
    if(!err){
        console.log("Listening. . .");
        
    }
});
