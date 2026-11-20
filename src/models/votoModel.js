var database = require("../database/config")

function votar(id_usuario, id_opcao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n votar():");

    var instrucaoSql = `
     INSERT INTO voto (fk_usuario, fk_op_enquete) VALUES
     (${id_usuario},${id_opcao});`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarresultados() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n listarresultados():");

    var instrucaoSql = `
    select e.pergunta, o.descricao,
       count(v.fk_usuario) as total_votos
from enquete e
join opcao_enquete o on o.fk_enquete = e.id_enquete
left join voto v on v.fk_op_enquete = o.id_opcao
group by e.id_enquete, e.pergunta, o.id_opcao, o.descricao
order by e.id_enquete, total_votos desc;`;

console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    votar,
    listarresultados
};