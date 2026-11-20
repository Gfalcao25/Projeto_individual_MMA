var opcaoEnqueteModel = require("../models/opcaoEnqueteModel")

function listarporenquete(req,res){

var id_enquete = req.params.id_enquete;

    opcaoEnqueteModel.listarporenquete(id_enquete)
    .then(
        function (resultado){
            console.log(`\nResultados encontrados: ${resultado.length}`);
            console.log(`Resultados: ${JSON.stringify(resultado)}`);
            res.json(resultado);
        }
    ).catch (
        function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao buscar resultado! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    listarporenquete
};
 