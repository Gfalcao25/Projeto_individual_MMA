var votoModel = require("../models/votoModel")

function votar(req, res){

    var id_usuario = req.body.id_usuario;
    var id_opcao = req.body.id_opcao

    votoModel.votar(id_usuario,id_opcao)
    .then(
        function(resultado){
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

function listarresultados(req, res){
    votoModel.listarresultados()

    .then(
        function(resultado){
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
    votar,
    listarresultados
}
