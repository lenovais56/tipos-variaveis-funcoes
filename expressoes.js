// Declaração de função

function soma(num1, num2) {
    return num1 + num2;
}
console.log(soma(3, 3));

// Expressão de função

const soma1 = function (num1, num2) {return num1 + num2};
console.log(soma1(1, 3));

// Diferença principal

console.log(apresentar()); // chamada antes da função

function apresentar() {
    return 'Olá';
}

console.log(soma2(1, 2)); // ReferenceError: Cannot access 'soma2' before initialization
const soma2 = function (num1, num2) {return num1 + num2}; // funções e variaveis devem ser listada no topo do arquivo