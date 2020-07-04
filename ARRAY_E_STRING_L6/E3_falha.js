let rs = require('readline-sync');
let jogador1 = rs.question('Qual o seu nome? Você será o Jogador 1 ')
let jogador2 = rs.question('Qual o seu nome? Você será o jogador 2 ')
let arrayjogador1 = [] ;
let arrayjogador2 = [];
let juntos = [];

for (let i = 0; i < 5 ; i++){
    let nA = rs.questionInt(` ${jogador1}, insira um número: `);
    arrayjogador1.push(nA)
}
console.log('=============')

for (let i = 0; i < 5; i++){
    let nB = rs.questionInt(`${jogador2}, insira um número: `);
    arrayjogador2.push(nB)
}

for (let i = 0; i <= 4; i++){
    for (let i2 = 0; i2 <=4; i2++){
        if (arrayjogador1[i] == arrayjogador2[i2]) {
        juntos.push(arrayjogador2[i])
        }
    }
}
console.log(`Os números em comum são: ${juntos}`)

// mostrando numero sem sentido
   