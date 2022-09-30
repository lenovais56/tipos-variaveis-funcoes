// let x = '';
// console.log(x);

// x = 'Oi';
// console.log(x);

//declaração de função
function imprimeTexto (texto) {
    console.log(texto)
}

imprimeTexto('Hello world');
imprimeTexto('Olá mundo');
imprimeTexto(soma());

//3 formas de escrever funções

function soma() {
    //outros codigos
    return 2 + 2; //Deve ser o ultimo codigo a ser passado dentro da function
}
console.log(soma()); // serve para teste do desenvolvedor

// --- Exemplos de funções prontas ---

console.log(Math.round(4.3));
console.log(Math.ceil(5.2));
console.log(Math.floor(5.2));
console.log(Math.trunc(4.3));
console.log(Math.sqrt(64));
console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));
console.log(Math.random());

// - Math.round(): Faz o arredondamento de um número de ponto flutuante para o inteiro mais próximo. Ex.: Math.round(4.3) retorna 4
// - Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto. Ex.: Math.ceil(5.2) retorna 6
// - Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso. Ex.: Math.floor(5.2) retorna 5
// - Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento. Ex.: Math.trunc(4.3) ou Math.trunc(4.3) retorna 4
// - Math.sqrt() : Retorna a raiz quadrada de um número. Ex.: Math.sqrt(64) retorna 8
// - Math.min(): Retorna o menor valor entre os argumentos. Ex.: Math.min(0, 150, 30, 20, -8, -200) retorna -200
// - Math.max(): Retorna o maior valor entre os argumentos. Ex.: Math.max(0, 150, 30, 20, -8, -200) retorna 150
// - Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber. 
// Ex.: Math.random() retorna 0.7456916270759015
// Ex.:Math.random() retorna 0.15449802102729304
