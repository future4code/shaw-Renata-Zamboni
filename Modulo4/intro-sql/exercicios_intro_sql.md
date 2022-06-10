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
a)

b)

c)

d)

### Exercício 5
a)

b)

c)

d)

e)
### Exercício 6
a)

b)

c)

### Exercício 7
a)

b)

c)

d)