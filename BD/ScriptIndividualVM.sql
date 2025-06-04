-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

CREATE DATABASE IF NOT EXISTS corinthians;

USE corinthians;

CREATE TABLE estado (
	idEstado INT PRIMARY KEY,
    sigla CHAR(2),
    nome VARCHAR(50),
    regiao VARCHAR(20), 
    populacaoMedia INT NOT NULL
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	idEstado INT,
    socioTorcedor VARCHAR(1),
    jogadorPreferido VARCHAR(20),
    visitouEstadio VARCHAR(1),
    CONSTRAINT fk_idEstado_estado FOREIGN KEY (idEstado) REFERENCES Estado(idEstado)
);

CREATE TABLE resultadosQuiz (
	idQuiz INT PRIMARY KEY auto_increment,
    idUsuario INT,
    acertos INT,
    porcentagemFinalDeAcertos decimal(5, 2) CHECK (porcentagemFinalDeAcertos between 0 and 100),
    diaDataHoraQuiz datetime default current_timestamp(),
    CONSTRAINT fk_resultado_usuario FOREIGN KEY (idUsuario) REFERENCES usuario(id)
);
       
       
insert into estado (idEstado, sigla, nome, regiao, populacaoMedia) 
VALUES	(1, 'AC', 'Acre', 'Norte', 830000),
		(2, 'AL', 'Alagoas', 'Nordeste', 3350000),
		(3, 'AP', 'Amapá', 'Norte', 877000),
		(4, 'AM', 'Amazonas', 'Norte', 4000000),
		(5, 'BA', 'Bahia', 'Nordeste', 14500000),
		(6, 'CE', 'Ceará', 'Nordeste', 9200000),
		(7, 'ES', 'Espírito Santo', 'Sudeste', 4100000),
		(8, 'GO', 'Goiás', 'Centro-Oeste', 7200000),
		(9, 'DF', 'Distrito Federal', 'Centro-Oeste', 3100000),
		(10, 'MA', 'Maranhão', 'Nordeste', 7100000),
		(11, 'MT', 'Mato Grosso', 'Centro-Oeste', 3600000),
		(12, 'MS', 'Mato Grosso do Sul', 'Centro-Oeste', 2800000),
		(13, 'MG', 'Minas Gerais', 'Sudeste', 20500000),
		(14, 'PA', 'Pará', 'Norte', 8800000),
		(15, 'PB', 'Paraíba', 'Nordeste', 4000000),
		(16, 'PR', 'Paraná', 'Sul', 11500000),
		(17, 'PE', 'Pernambuco', 'Nordeste', 9700000),
		(18, 'PI', 'Piauí', 'Nordeste', 3300000),
		(19, 'RJ', 'Rio de Janeiro', 'Sudeste', 16800000),
		(20, 'RN', 'Rio Grande do Norte', 'Nordeste', 3500000),
		(21, 'RS', 'Rio Grande do Sul', 'Sul', 11200000),
		(22, 'RO', 'Rondônia', 'Norte', 1800000),
		(23, 'RR', 'Roraima', 'Norte', 650000),
		(24, 'SC', 'Santa Catarina', 'Sul', 7700000),
		(25, 'SP', 'São Paulo', 'Sudeste', 46000000),
		(26, 'SE', 'Sergipe', 'Nordeste', 2300000),
		(27, 'TO', 'Tocantins', 'Norte', 1600000);

       

select * from usuario;
select * from resultadosQuiz;
select * from estado;

show tables;

