CREATE TABLE contato (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sobrenome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mensagem TEXT NOT NULL,
    data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE evento (
    id SERIAL PRIMARY KEY,
    tipo VARCHAR(20),
    cidade VARCHAR(50),
    gravidade VARCHAR(20),
    data DATE
);

CREATE TABLE alertas_enchentes (
    id SERIAL PRIMARY KEY,
    cidade VARCHAR(255) NOT NULL,
    gravidade VARCHAR(50) CHECK (gravidade IN ('Crítico', 'Moderado', 'Leve')),
  	evento_id int,
    data_alerta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	FOREIGN KEY (evento_id) REFERENCES evento(id)
);


CREATE TABLE alertas_deslizamentos (
    id SERIAL PRIMARY KEY,
    cidade VARCHAR(255) NOT NULL,
    gravidade VARCHAR(50) CHECK (gravidade IN ('Crítico', 'Moderado', 'Leve')),
  	evento_id int,
    data_alerta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   FOREIGN KEY (evento_id) REFERENCES evento(id)
);

CREATE TABLE noticias (
    id SERIAL PRIMARY KEY,
    data DATE NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    subtitulo VARCHAR(255),
    corpo TEXT NOT NULL,
    autor VARCHAR(255)
);

INSERT INTO contato (nome, sobrenome, email, mensagem)
VALUES
('João', 'Silva', 'joao.silva@example.com', 'Gostaria de saber mais sobre as medidas de prevenção.'),
('Maria', 'Souza', 'maria.souza@example.com', 'Quais são os avisos atuais para minha cidade?'),
('Carlos', 'Oliveira', 'carlos.oliveira@example.com', 'Como posso ajudar na prevenção de enchentes?'),
('Ana', 'Costa', 'ana.costa@example.com', 'Existe algum plano de evacuação para a minha área?'),
('Paulo', 'Santos', 'paulo.santos@example.com', 'Qual a frequência das chuvas fortes na região?'),
('Beatriz', 'Ramos', 'beatriz.ramos@example.com', 'Estou preocupado com os deslizamentos de terra.'),
('Rafael', 'Lima', 'rafael.lima@example.com', 'Como posso receber alertas em tempo real?'),
('Juliana', 'Alves', 'juliana.alves@example.com', 'Onde encontro abrigos em caso de emergência?'),
('Marcos', 'Fernandes', 'marcos.fernandes@example.com', 'Quais são as áreas de risco mais próximas?'),
('Fernanda', 'Melo', 'fernanda.melo@example.com', 'Há previsão de chuvas intensas para esta semana?');

INSERT INTO evento (tipo, cidade, gravidade, data) VALUES
('enchente', 'Porto Alegre', 'Crítico', '2024-03-15'),
('enchente', 'Caxias do Sul', 'Moderado', '2024-03-16'),
('enchente', 'Pelotas', 'Leve', '2024-03-17'),
('enchente', 'Santa Maria', 'Crítico', '2024-03-18'),
('enchente', 'Canoas', 'Moderado', '2024-03-19');


INSERT INTO evento (tipo, cidade, gravidade, data) VALUES
('deslizamento', 'Porto Alegre', 'Crítico', '2024-04-01'),
('deslizamento', 'Caxias do Sul', 'Moderado', '2024-04-02'),
('deslizamento', 'Novo Hamburgo', 'Leve', '2024-04-06'),
('deslizamento', 'Rio Grande', 'Crítico', '2024-04-07'),
('deslizamento', 'São Leopoldo', 'Moderado', '2024-04-08'),
('deslizamento', 'Passo Fundo', 'Leve', '2024-04-09'),
('deslizamento', 'Gravataí', 'Crítico', '2024-04-10');


INSERT INTO alertas_deslizamentos (cidade, gravidade, evento_id)
VALUES
('Porto Alegre', 'Crítico', 6),
('Rio Grande', 'Moderado', 9),
('Novo Hamburgo', 'Leve', 8),
('Gravataí', 'Crítico', 12),
('São Leopoldo', 'Crítico', 10),
('Passo Fundo', 'Leve', 11);


INSERT INTO alertas_enchentes (cidade, gravidade, evento_id)
VALUES
('Porto Alegre', 'Crítico', 1),
('Caxias do Sul', 'Moderado', 2),
('Canoas', 'Moderado', 5),
('Pelotas', 'Leve', 3),
('Santa Maria', 'Crítico', 4);


INSERT INTO noticias (data, titulo, subtitulo, corpo, autor)
VALUES
('2024-06-25', 'Abrigos Temporários em Gravataí', 'População é orientada sobre abrigos', 'A população de Gravataí foi orientada sobre os abrigos temporários disponíveis.', 'Rafael Lima'),
('2024-07-10', 'Alertas em Tempo Real em Canoas', 'Sistema de alertas é implementado', 'Canoas implementou um sistema de alertas em tempo real para emergências.', 'Juliana Alves'),
('2024-03-05', 'Campanha de Conscientização em Pelotas', 'Moradores recebem orientações sobre riscos de enchentes', 'Uma campanha de conscientização sobre os riscos de enchentes foi lançada em Pelotas.', 'Carlos Oliveira'),
('2024-04-20', 'Plano de Evacuação em Rio Grande', 'Autoridades locais elaboram plano de ação', 'Um novo plano de evacuação foi elaborado pelas autoridades locais em Rio Grande.', 'Ana Costa');
('2024-01-15', 'Chuvas Intensas Atingem Porto Alegre', 'Cidade enfrenta alagamentos e transtornos', 'As chuvas intensas que atingiram Porto Alegre na última noite causaram alagamentos em diversos pontos da cidade.', 'João Silva'),
('2024-02-10', 'Prevenção de Enchentes em Santa Maria', 'Novas medidas são implementadas', 'Santa Maria implementou novas medidas de prevenção de enchentes após os últimos incidentes.', 'Maria Souza'),
('2024-05-15', 'Monitoramento de Chuvas em Caxias do Sul', 'Tecnologia ajuda a prever enchentes', 'Caxias do Sul implementou um sistema de monitoramento de chuvas para prever enchentes.', 'Paulo Santos'),
('2024-06-01', 'Alerta de Deslizamentos em Novo Hamburgo', 'Área de risco é monitorada', 'Novo Hamburgo está em alerta para possíveis deslizamentos após as últimas chuvas.', 'Beatriz Ramos');



select evento.cidade, evento.gravidade, alertas_deslizamentos.data_alerta from evento
inner join alertas_deslizamentos
on alertas_deslizamentos.evento_id = evento.id
and evento.data > '2024-04-01';

select * from noticias 
where data > '2024-02-15'

select cidade, count(*) from evento
where gravidade = 'Crítico'
GROUP by cidade
order by count Asc

SELECT EXTRACT(MONTH FROM data_envio) AS mes, COUNT(*)
FROM contato
GROUP BY EXTRACT(MONTH FROM data_envio)
ORDER BY mes;

SELECT * FROM contato
WHERE mensagem ILIKE '%enchente%';

SELECT cidade
FROM alertas_enchentes
WHERE gravidade = 'Crítico'
INTERSECT
SELECT cidade
FROM alertas_deslizamentos
WHERE gravidade = 'Crítico';

--- ______ feshow as consultas ______ -------