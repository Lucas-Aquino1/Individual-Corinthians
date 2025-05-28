var database = require("../database/config");

// SELECT PARA OS GRAFICOS
function buscarUltimasMedidas(idGrafico) {
    if (idGrafico == 1) {
        var instrucaoSql = `
        SELECT E.nome AS estado, COUNT(U.id) AS total_torcedores
        FROM usuario U
        JOIN estado E ON U.idEstado = E.idEstado
        GROUP BY E.nome
        ORDER BY total_torcedores DESC
        LIMIT 5;
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (idGrafico == 2) {
        var instrucaoSql = `
        SELECT u.nome AS nome, r.acertos AS acertos
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
        SELECT 
            CASE visitouEstadio 
            WHEN 'S' THEN 'Já foi'
            WHEN 'N' THEN 'Nunca foi'
            ELSE 'Não informado'
            END AS visita,
        COUNT(*) AS total
        FROM usuario
        GROUP BY visita;

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

}


// SELECTS PARA AS KPIS
function buscarMedidasEmTempoReal(idIndicador) {
    if (idIndicador == 1) {
        var instrucaoSql = `
        SELECT ROUND(AVG(acertos), 0) media
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
        SELECT COUNT(*) AS totalSocioTorcedores
        FROM usuario
        WHERE socioTorcedor = 'S';
        `;

        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}