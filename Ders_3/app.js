var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){

    if(req.url == "/"){
        fs.readFile("../ders2/index.html", function(err, data){
            res.write(data);
            res.end("ilk sayfa");
        });
    }else if(req.url == "/login"){
        fs.readFile("index.html", function(err, data){
            res.write(data);
            res.end("login sayfasi ");
        });
    }else {
        fs.readFile("../ders2/index.html", function(err, data){
            res.write(data);
            res.end("login dışında herhangi bir şey yazığında açılacak sayfa");
        });
    }
}).listen(8080);
