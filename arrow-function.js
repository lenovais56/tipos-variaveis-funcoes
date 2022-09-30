function apresentar (nome) {
    return `Meu nome é ${nome}.`;
}

console.log(apresentar('Leandro'));

//Arrow function (forma rápida e curta de escrever a função)
const apresentaArrow = nome => `Meu nome é ${nome}.`;
console.log(apresentaArrow('Leandro'));

const soma = (num1, num2) => num1 + num2;
console.log(soma(3, 5));

//Arrow function com mais de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(1, 9))