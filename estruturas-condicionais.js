const num1 = 11;

if (num1 > 10 || !num1) {
 console.log('número não válido');
}


const num2 = 11;

if (num2 > 10 && num2 < 20) {
 console.log('número válido');
}


function verificaNumero(numero) {
    if (numero > 10) {
      return 'número maior que 10';
    } else {
      return 'número não é maior que 10';
    }
}
   console.log(verificaNumero(9)) //número não é maior que 10


const num = 15;

if (num >= 0 && num <= 10) {
  console.log('número entre zero e dez');
} else if (num > 10 && num <= 20) {
  console.log('número entre dez e vinte');
} else if (num > 20 && num <= 30) {
  console.log('número entre vinte e trinta');
} else {
  console.log('outro número');
}
