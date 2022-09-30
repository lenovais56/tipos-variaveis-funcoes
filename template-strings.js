const nome = 'Le';
let idade = 2022-1990;
const cidadeNascimento = 'São Paulo'

const apresentacao = 'Meu nome é ' + nome + ', minha idade é ' + idade + ' e nasci na cidade de ' + cidadeNascimento + '.';
console.log(apresentacao);

//Com template string
//a string está entre ` ` acentos graves e as variaveis esta dentro do ${ }
const apresentacao2 = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeNascimento}.`;
console.log(apresentacao2);

//Teste com template e operador ternário

idade = 16;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)