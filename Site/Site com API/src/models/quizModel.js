var database = require('../database/config');

                        // VARIAVEL TEM Q ESTAR IGUAL O CONTROLLER
function salvarResultado(idUsuario, acertos, porcentagemFinalDeAcertos) {
    console.log("Entrou no quizModel");
    var instrucaoSql = `
        INSERT INTO resultadosQuiz (idUsuario, acertos, porcentagemFinalDeAcertos) VALUES (${idUsuario}, ${acertos}, '${porcentagemFinalDeAcertos}');
    `;
    console.log("Executando a query: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    salvarResultado
}