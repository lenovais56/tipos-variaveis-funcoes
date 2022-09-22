//boolean

const primeiroNumero = 5;
const segundoNumero = 10;
const terceiroNumero = 5;

console.log(primeiroNumero === segundoNumero); // false (=== é comparação com possibilidade de resultado true ou false (verdaeiro ou falso))

console.log(primeiroNumero === terceiroNumero); // true

const texto1 = 'Alura';
const texto2 = 'A';
const texto3 = 'alura';

console.log(texto1 === texto2); // false
console.log(texto1 === texto3); // false (o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.)