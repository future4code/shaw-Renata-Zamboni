CREATE TABLE Actor(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

### Exercício 1
a)
VARCHAR: é uma string e 
PRIMARY KEY: significa que essa id/string também é um identificador único;
DATE: representa uma data e por padrão do SQL seu formato é ano/mês/dia e 
NOT NULL: significa que o valor requerido no comando é de preenchimento obrigatório;

b) SHOW DATABASES: mostrou o nome do meu database, que foi passado pelo slack pela Labenu;
SHOW TABLES: Mostrou a tabela que acabei de criar (Actor) e também a tabela que criei durante a aula (alunos_labenu)

c) Mostrou a estrutura da tabela criada, agrupando os parametros inseridos nas categorias Field, Type, Null, Key, Default e Extra.

### Exercício 2
a) "A contagem das colunas não corresponde à contagem do valor na linha 1".
Linha 1 = (id, name, salary, birth_date, *gender*). Faltou passar a inforção de genero, que é de preenchimento obrigatório por ser NOT NULL. Inserido "female" ao fim inseriu dado.

b) "Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMÁRIO'."
A id é uma chave única e por isso não pode ser repetida.

c) Valores da coluna não batem com os da linha, pois faltou passar o parâmetro "birth_date".
Resposta após correção: 1 fileira afetada.

d)"Nome não tem um valor padrão". Nome não foi passado como parametro nem preenchido.

e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

f)INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Luis Gustavo",
  300000,
  "1934-02-02", 
  "male"
);

### Exercício 3
a)
SELECT * FROM Actor
WHERE gender = "female";

b)
SELECT salary from Actor
WHERE name = "Tony Ramos";

c)
Todos os campos retornaram Null já que não há ator/atriz sem definição de genero, além do campo "genero" não aceitar valor nulo.

d)
SELECT id, name, salary
FROM Actor
WHERE salary <500000;

e)"Error Code: 1054. Coluna 'nome' desconhecida no campo de lista.
Não há campo "nOme", mas sim "nAme". Precisamos chamar da mesma forma.
Chamada correta: SELECT id, name from Actor WHERE id = "002";

### Exercício 4
a) A query 
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
nos pernite consultar diversos valores de uma só vez por meio da combinação de e parametros e operadores lógicos.

b)
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

c)
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

d)
SELECT * FROM Actor
WHERE name (LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" or name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;

### Exercício 5
a)
CREATE TABLE Film(
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  sinopse TEXT NOT NULL,
  release_date DATE NOT NULL,
  rate INT NOT NULL   
);

b)
INSERT INTO Film (id, name, sinopse, release_date, rate)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento.
Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

c)
INSERT INTO Film (id, name, sinopse, release_date, rate)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões.
A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida,
empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

d)
INSERT INTO Film (id, name, sinopse, release_date, rate)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho,
que só quer saber de farras e jogatina nas boates.
A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

e)
INSERT INTO Film (id, name, sinopse, release_date, rate)
VALUES(
"004",
"Narradores de Javé",
"A população analfabeta da pequena cidade de Javé
encarrega Antônio Biá com a missão de escrever a história da cidade,
numa tentativa de impedir a construção de uma represa hidrelétrica que destruiria a vila.
Eles começam a lembrar (ou a maquiar) grandes personalidades e eventos locais.",
"2004-01-23",
8
);

### Exercício 6
a)
SELECT id, name, rate
FROM Film
WHERE id = "004";

b)
SELECT * FROM Film
WHERE name = "Narradores de Javé";

c)
SELECT id, name, sinopse
FROM Film
WHERE rate >7;


### Exercício 7
a)
SELECT * FROM Film
WHERE name LIKE "%vida%";

b)
SELECT * FROM Film
WHERE name LIKE "%eu%" OR sinopse LIKE "%eu%";

c)
SELECT * FROM Film
WHERE release_date < "2020-05-10";

d)
SELECT * FROM Film
WHERE 
release_date < "2020-05-10"
AND name LIKE "%eu%" OR sinopse LIKE "%eu%"
AND rate >7;

OU

SELECT * FROM Film
WHERE 
release_date < CURDATE()
AND name LIKE "%eu%" OR sinopse LIKE "%eu%"
AND rate >7;

OBS.: Da forma como está sugerida nas dicas só retorna uma linha com valores nulos.

