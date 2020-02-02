var ex = require("express");
var app = ex();
var path = require("path");
var router = require("./routers");

app.set("view engine", 'ejs');
app.set('views', path.join(__dirname,"/views"));

app.use("/", router);
app.listen(8080);
console.log("Server Created...");