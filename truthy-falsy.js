// boolean

const usuarioLogado = true;
const contapaga = false;

// truthy ou falsy

// 0 => false
// 1 => true

console.log( 0 == false); //true
console.log( '' == false); //true
console.log( 1 == true); //true

// null (vazio ou nada)
// undefined (quando temos uma variável declarada porém sem valor)

let minhaVar; //undefined
let varNull = null; //null

console.log(minhaVar);
console.log(varNull);
console.log(typeof minhaVar);
console.log(typeof varNull);

let numero = 3;
let texto = 'Altura';

console.log(typeof numero);
console.log(typeof texto);