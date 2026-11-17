-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database falcon_kombat_teste;

use falcon_kombat_teste;

create table usuario (
id_usuario int primary key auto_increment,
nome varchar(100) not null,
apelido varchar(50) not null,
email varchar(100) not null unique,
senha varchar(255) not null,
data_cadastro datetime default current_timestamp
);

create table enquete (
id_enquete int primary key auto_increment,
pergunta varchar(250) not null
);


create table opcao_enquete (
id_opcao int primary key auto_increment,
descricao varchar(250) not null,
fk_enquete int not null,
constraint ckfk_opcao_enquete
foreign key (fk_enquete) references enquete(id_enquete)
);

create table voto (
id_voto int primary key auto_increment,
fk_usuario int not null,
fk_op_enquete int not null,
constraint ckfk_usuario_voto 
foreign key (fk_usuario) references usuario(id_usuario),
constraint ckfk_op_enquete_voto 
foreign key (fk_op_enquete) references opcao_enquete(id_opcao)
);

insert into enquete (pergunta)
values ('Quem é o maior lutador da história do MMA?');

insert into opcao_enquete (descricao, fk_enquete)
values
('Jon Jones', 1),
('Georges St-Pierre', 1),
('Anderson Silva', 1),
('Fedor Emelianenko', 1),
('Demetrious Johnson', 1),
('José Aldo', 1),
('Khabib Nurmagomedov', 1),
('Amanda Nunes', 1),
('Stipe Miocic', 1),
('Daniel Cormier', 1),
('Randy Couture', 1),
('B.J. Penn', 1),
('Kamaru Usman', 1),
('Rodrigo Minotauro Nogueira', 1),
('Kazushi Sakuraba', 1);


insert into usuario (nome, apelido, email, senha)
values
('Gabriel Falcão', 'falcão', 'gabriel@email.com', 'Falcon@123'),
('Pedro Miyadaira', 'Phfal', 'carlos@email.com', 'Pedro#456'),
('Lucas Santos', 'lucas_mma', 'lucas@email.com', 'Lucas!789');

insert into voto (fk_usuario, fk_op_enquete)
values
(1, 1),
(2, 3),
(3, 5),
(1, 3),
(2, 1),
(1, 1),
(3, 7),
(2, 3);

select
o.descricao,
count(v.id_voto) as total_votos
from opcao_enquete as o
left join voto as v
on o.id_opcao = v.fk_op_enquete
group by o.id_opcao, o.descricao
order by total_votos desc;

insert into enquete (pergunta)
values ('Qual é a melhor música de entrada do UFC?');

insert into opcao_enquete (descricao, fk_enquete)
values
('Alex Pereira', 2),
('Lyoto Machida', 2),
('Ilia Topuria', 2),
('Khabib Nurmagomedov', 2),
('Jung Chan-Sung', 2),
('José Aldo', 2),
('Dustin Poirier', 2),
('Justin Gaethje', 2),
('Paddy Pimblett', 2),
('Carlos Prates', 2);
