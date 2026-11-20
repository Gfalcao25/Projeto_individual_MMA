var express = require("express");
var router = express.Router();

var opcaoEnqueteController = require("../controllers/opcaoEnqueteController");

router.get("/listarporenquete/:id_enquete", function (req, res) {
    opcaoEnqueteController.listarporenquete(req, res);
})

module.exports = router;