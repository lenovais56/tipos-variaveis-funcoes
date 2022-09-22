// variaveis var, let e const

var altura1 = 5;
var comprimento1 = 7;

area1 = altura1 * comprimento1;

console.log(area1);
var area1;

//----------------------------------------------------//

let forma = 'retângulo;'
let altura2 = 5;
let comprimento2 = 7;
let area2;

if (forma === 'retângulo') {
    area2 = altura2 *  comprimento2;
} else {
    area2 = (altura2 *  comprimento2) / 2;
}

console.log(area2);

//----------------------------------------------------//

const forma1 = 'quadrado';
const altura = 5;
const comprimento = 7;
let area;

if (forma1 === 'quadrado') {
        area = altura * comprimento;
    } else {
        area = (altura * comprimento) / 2;
    }

console.log(area);