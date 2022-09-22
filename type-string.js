const texto1 = 'Olá mundo!';
const texto2 = "Olá mundo!";
const senha1 = 'senhaSuperSegura456!';
const stringDeNumeros = '64567';

// Aspas simples ou dupla tem a mesma finalidade de declarar uma string
// Números dentro de aspas é reconhecido como uma string (por exemplo: não seria possível fazer operações matemáticas)

const citacao = 'O Leo disse "oi!"'; // Nesse caso foi necessário utilizar aspas duplas no texto dentro da string, então para declarar a string e o JavaScript conseguir entender onde inicia e finaliza a strin foi utilizado aspas simples.

console.log(citacao);

// Concatenação

const meuNome = 'Meu nome é ';
const nome = 'Leandro';

console.log(meuNome + nome); // Concatenando as variáveis


// Testes com códigos Unicode
const cifrao = '\u0024'
const tique = '\u2705'
const hiragana = '\u3041'
const aMaiusculo = '\u0041'
console.log(cifrao, tique, hiragana, aMaiusculo);


// Manipulando strings
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false (o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.)

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true (O toLowerCase() converte todos os caracteres da string informada (no caso, input) para letras minúsculas (se forem algarismos, nada é convertido).)

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres (A propriedade length pode ser utilizada para sabermos quantos caracteres uma string contém)
