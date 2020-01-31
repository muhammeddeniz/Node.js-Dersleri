var fs = require("fs");
var ex = require("express");
var app = ex();
var elektronik  = require("./elektronik");
var bilgisayar = require("./bilgisayar");
var path = require("path");

app.get("/", elektronik.ctrlElektronik);
app.get("/bilgisayar", bilgisayar.ctrBilgisayar);

app.listen(8080);
