var quizModel = require('../models/quizModel');

function salvarResultado(req, res) {
    // COLOCAR AS VARIAVEIS DO MEU QUIZ E FAZER A REQUISIÇÃO DA MINHA VARIAVEL DO QUIZ
    var idUsuario = req.body.idUsuarioServer;
    var acertos = req.body.acertosServer;
    var porcentagemFinalDeAcertos = req.body.porcentagemFinalDeAcertosServer;

                            // MUDAR AQUI OQ SALVAR NO BANCO
    quizModel.salvarResultado(idUsuario, acertos, porcentagemFinalDeAcertos)
        .then(function (resultado) {
            res.status(200).json(resultado);
        });
}



module.exports = {
    salvarResultado
}