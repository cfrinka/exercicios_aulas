let rs = require('readline-sync')
let palavra = 'ABELHA';
let vogais = ['a','e','i','o','u'];
let QtdVogais = 0
let QtdConsoantes = 0
let resultado = `A palavra ${palavra} tem ${QtdVogais} vogais e ${QtdConsoantes} consoantes`


for( i = 0; i <= palavra.length ; i++){
    if(palavra.charAt(i) == vogais[i])
    console.log(resultado)
}

//o chatAt precisa rodar em todas as posições da palavra e do array vogais e então somar ao numero de vogais