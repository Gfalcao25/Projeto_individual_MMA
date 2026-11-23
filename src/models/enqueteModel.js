var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar():");

    var instrucaoSql = `
        SELECT id_enquete, pergunta FROM enquete;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarvotos(id_enquete) {
    var instrucaoSql = `
    select 
    e.pergunta,
    o.descricao,
    count(v.fk_usuario) as quantidade_votos
    from opcao_enquete o
    join voto v
    on v.fk_op_enquete = o.id_opcao
    join enquete e
    on o.fk_enquete = e.id_enquete
    where e.id_enquete = ${id_enquete}
    group by o.id_opcao, o.descricao, e.pergunta;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

module.exports = {
    listar,
    listarvotos
};