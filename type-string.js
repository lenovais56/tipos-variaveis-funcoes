const texto1 = 'Olá mundo!';
const texto2 = "Olá mundo!";
const senha = 'senhaSuperSegura456!';
const stringDeNumeros = '64567';

// Aspas simples ou dupla tem a mesma finalidade de declarar uma string
// Números dentro de aspas é reconhecido como uma string (por exemplo: não seria possível fazer operações matemáticas)

const citacao = 'O Leo disse "oi!"'; // Nesse caso foi necessário utilizar aspas duplas no texto dentro da string, então para declarar a string e o JavaScript conseguir entender onde inicia e finaliza a strin foi utilizado aspas simples.

console.log(citacao);

// Concatenação

const meuNome = 'Meu nome é ';
const nome = 'Leandro';

console.log(meuNome + nome); // Concatenando as variáveis