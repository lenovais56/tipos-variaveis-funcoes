// Parâmetros de função

function soma(num1, num2) {
    return num1 + num2;
}
//            num1, num2
console.log(soma(5, 3))
console.log(soma(56361, 263))
console.log(soma(500, 3.502))

// Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado;

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade('Leandro', 32));
console.log(nomeIdade(32, 'Leandro')); // Meu nome é 32 e minha idade é Leandro (por isso devemos nos atentar a ordem dos parâmetros);

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));

//teste
console.log(multiplica(3));

function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Leandro') // "Oi gente! Meu nome é Lenadro"

   function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
   operacaoMatematica(15, 30, 45) // 90
   console.log(operacaoMatematica(15, 30, 45));

function comParametro(param) {
    console.log(param); //undefined pois não foi definido um parâmetro
}
comParametro()