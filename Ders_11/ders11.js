var fs = require("fs");
var ex = require("express");
var path = require("path");
var app = ex();

var cntrlr1 = require("./controller1");

app.get("/", cntrlr1.controller1);
app.listen(8080);