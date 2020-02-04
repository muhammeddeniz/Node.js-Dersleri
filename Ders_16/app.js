var express = require("express");
var app = express();
var path = require("path");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


/* ROUTE A ADİ YAZILAN SAYFANIN EJS DOSYASINI GETİREN 
 ÇOKLU YÖNLENDİRME */

app.get("/:id", function(req, res,err){
    var rout = req.params.id;

    res.render(rout, {
        data : rout
    })

    if(err){
        res.send("Sayfa Bulunanmadi. . .");
    }
})

app.listen(8080, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("server çalışıyor. . .");
    }

})