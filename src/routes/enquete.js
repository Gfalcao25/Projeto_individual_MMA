var express = require("express");
var router = express.Router();

var enqueteController = require("../controllers/enqueteController");

router.get("/listar", function (req, res) {
    enqueteController.listar(req, res);
})

module.exports = router;