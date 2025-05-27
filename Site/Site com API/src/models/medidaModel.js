var database = require("../database/config");

// SELECT PARA OS GRAFICOS
function buscarUltimasMedidas(idGrafico, limite_linhas) {
    if (idGrafico == 1) {
        var instrucaoSql = `
        SELECT socioTorcedor, COUNT(*) AS total
        FROM usuario
        GROUP BY socioTorcedor;
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (idGrafico == 2) {
        var instrucaoSql = `
        SELECT u.nome, r.acertos
        FROM resultadosQuiz r
        JOIN usuario u ON r.idUsuario = u.id
        ORDER BY r.acertos DESC
        LIMIT 5;
        `;

        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (idGrafico == 3) {
        var instrucaoSql = `
        SELECT u.nome, r.porcentagemFinalDeAcertos
        FROM resultadosQuiz r
        JOIN usuario u ON r.idUsuario = u.id;
    `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (idGrafico == 4) {
        var instrucaoSql = `
        SELECT jogadorPreferido, COUNT(*) AS total
        FROM usuario
        GROUP BY jogadorPreferido
        ORDER BY total DESC
        LIMIT 5;
        `;

        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    // if (idGrafico == 5) {
    //     var instrucaoSql = `SELECT jog.apelido as apelido, count(*) as contagem
    //     FROM usuario usu
    //     INNER JOIN jogador jog on jog.idjogador = usu.fk_jogadorFavorito
    //     GROUP BY apelido
    // ORDER BY contagem DESC LIMIT ${limite_linhas}`;

    //     console.log("Executando a instrução SQL: \n" + instrucaoSql);
    //     return database.executar(instrucaoSql);
    // }

}


// SELECTS PARA AS KPIS
function buscarMedidasEmTempoReal(idIndicador) {
    if (idIndicador == 1) {
        var instrucaoSql = `
        SELECT ROUND(AVG(porcentagemFinalDeAcertos), 2) AS mediaPontuacao
        FROM resultadosQuiz;
        `;

        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (idIndicador == 2) {
        var instrucaoSql = `
        SELECT jogadorPreferido, COUNT(*) AS total
        FROM usuario
        GROUP BY jogadorPreferido
        ORDER BY total DESC
        LIMIT 1;
        `;

        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (idIndicador == 3) {
        var instrucaoSql = `
        SELECT 
        ROUND(100.0 * SUM(CASE WHEN socioTorcedor = 'S' THEN 1 ELSE 0 END) / COUNT(*), 2) AS porcentagemSocios
        FROM usuario;
        `;

        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    // if (idIndicador == 4) {
    //     var instrucaoSql = `SELECT faixa_idade
    //     FROM view_faixaIdade
    //     WHERE contagem = (SELECT MAX(contagem) FROM view_faixaIdade)`;

    //     console.log("Executando a instrução SQL: \n" + instrucaoSql);
    //     return database.executar(instrucaoSql);
    // }

    // if (idIndicador == 5) {
    //     var instrucaoSql = `SELECT jogador
    //     FROM view_jogador
    //     WHERE contagem = (SELECT MAX(contagem) FROM view_jogador)`;

    //     console.log("Executando a instrução SQL: \n" + instrucaoSql);
    //     return database.executar(instrucaoSql);
    // }

    // if (idIndicador == 6) {
    //     var instrucaoSql = `SELECT regiao
    //     FROM view_regiao
    //     WHERE contagem = (SELECT MAX(contagem) FROM view_regiao)`;

    //     console.log("Executando a instrução SQL: \n" + instrucaoSql);
    //     return database.executar(instrucaoSql);
    // }
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}