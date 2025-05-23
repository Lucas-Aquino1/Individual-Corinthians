-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/


-- TESTE API NO PROJETO INDIVIDUAL
CREATE DATABASE IF NOT EXISTS corinthians;

USE corinthians;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	cpf VARCHAR(14),
    socioTorcedor VARCHAR(50),
    jogadorPreferido VARCHAR(20),
    visitouEstadio VARCHAR(50)
);

CREATE TABLE resultadosQuiz (
	idQuiz INT PRIMARY KEY auto_increment,
    idUsuario INT,
    acertos INT,
    porcentagemFinalDeAcertos decimal(5, 2) CHECK (porcentagemFinalDeAcertos between 0 and 100),
    CONSTRAINT fk_resultado_usuario FOREIGN KEY (idUsuario) REFERENCES usuario(id)
);




SELECT * from usuario;
SELECT * from resultadosQuiz;

truncate usuario;



