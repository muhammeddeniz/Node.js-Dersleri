var http = require("http");

http.createServer(function(req, res){
    res.writeHead(200, {"content-Type" : "text/html"});
    res.end("ilk nodejs dersi");
}).listen(8080);

console.log("Serever Started...");