let user = require('readline-sync');
 
let player1 = user.question('Nome Jogador 1: \n');
let p1 = [];
let p2 = [];
let resultado = [];
 
for(let i = 0; i < 5; i++) {
    p1[i] = user.question('Números Player 1 de 1 até 10: ');
}
 
let player2 = user.question('Nome jogador 2: ');
 
for(let i = 0; i < 5; i++) {
    p2[i] = user.question('Números Player 2 de 1 até 10: ');
}
 
 
for(let i = 0; i < 5; i++) {
    if(!resultado.includes(p1[i])) resultado.push(p1[i]);
    if(!resultado.includes(p2[i])) resultado.push(p2[i]);
};
 
console.log(resultado);
