var ex = require("express");
var router = ex.Router();
var controller = require("./controller");

router.get("/", controller.conrollera);
router.get("/b", controller.conrollerb);

module.exports = router;