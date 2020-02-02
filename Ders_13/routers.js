var controller = require("./controller");
var ex = require("express");
var router = ex.Router();

router.get("/", controller.aController);
router.get("/b", controller.bController);

module.exports = router;
