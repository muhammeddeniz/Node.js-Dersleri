var path = require("path");

module.exports.controller1 = function (req, res) {
    res.sendFile(path.join(__dirname, "data.txt"));

}