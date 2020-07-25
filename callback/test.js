const fs = require('fs')

console.log('iniciando software');

function callback(erro, dados){
    if (erro) {
        console.log('aconteceu um erro');
        return;
    }
    console.log(JSON.parse(dados))
}
fs.readFile('arquivo.json', callback)

console.log('Lendo Arquivo')
