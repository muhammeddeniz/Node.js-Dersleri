var http = require("http");
var fs = require("fs");

var firstPage = function (req, res) {

    fs.readFile("../ders2/index.html", function (err, data) {
        res.write(data);
        res.end("ilk ekranımız bu yönlendirme denemesi");
    });

}

var loginPage = function (req, res) {

    fs.readFile("../ders2/index.html", function (err, data) {
        res.write(data);
        res.end("bu bizim login ekranimiz. yönlendirme denemesi");
    });

}

var yonlendir = new Object();

yonlendir["/"] = firstPage;
yonlendir["/login"] = loginPage;

http.createServer(function (req, res) {
    if(req.url in yonlendir){
        yonlendir[req.url](req, res);
    }

}).listen(8080);
