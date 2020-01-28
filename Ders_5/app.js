var http = require("http");
var fs = require("fs");

var yonlendirici = new Object();

var firstScreen = function (req, res) {
    if (req.url == "/") {
        fs.readFile("index.html", function (err, data) {
            res.write(data);
            res.end("ilk sayfa");
        });
    }
}
var loginPage = function (req, res) {

    if (req.url == "/login") {
        fs.readFile("index.html", function (err, data) {
            res.write(data);
            res.end("login sayfasi ");
        });
    }
}

yonlendirici['/'] = firstScreen;
yonlendirici['/login'] = loginPage;

http.createServer(function (req, res) {
    if(req.url in yonlendirici)
        yonlendirici[req.url](req, res);
    
}).listen(8080);
