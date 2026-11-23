var express = require("express");
var router = express.Router();

var enqueteController = require("../controllers/enqueteController");

router.get("/listar", function (req, res) {
    enqueteController.listar(req, res);
})

router.get("/votos/:id_enquete", function(req, res){
enqueteController.listarvotos(req, res)
})


module.exports = router;