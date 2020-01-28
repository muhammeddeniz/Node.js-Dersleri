var http = require("http");
var fs = require("fs");

var fistPage = function (req, res) {
    fs.readFile("./ders2/index.html", function (err, data) {
        res.write(data);
        res.end("ilk web sayfasi.");
    });
}
var loginPage = function (req, res) {
    fs.readFile("./ders2/index.html", function (err, data) {
        res.write(data);
        res.end("login sayfasi ");
    });
}
http.createServer(function (req, res) {
    if (req.url == "/") {
        fistPage(req, res);
    
    }else if (req.url == "/login") {
        loginPage(req, res);
    }
}).listen(8080);

console.log("Server Created...");