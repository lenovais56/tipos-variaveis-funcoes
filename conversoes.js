//conversão implicita - ex: converter um number em string

const numero = 456;
const numeroString = '456';

console.log(numero === numeroString); //false - numero é do tipo number e numeroString é do tipo string
console.log(numero == numeroString); //true - Js converte numero em string, por isso o resultado é true

console.log(numero + numeroString); // 456456 - concatenou o number (456) com a string 456

//conversão explicita - ex: 

//Number() - pode ser declarada junto a atribuição da string. ex: const numeroString = Number('456');
//String()

console.log(numero + Number(numeroString)); //dessa forma a função Number converte a string em number
