const rs = require('readline-sync')

const inicio = rs.questionInt('Escolha uma opção: 1. Cadastrar  2.Listar  3.Sair: ')

while (inicio != 1 && inicio != 2 && inicio != 3) {
    console.log('Opção inválida')
    break;

    if (inicio === 1) {
        console.log('cadastrar')


    }

    else if (inicio === 2) {
        console.log('listar')

    }

    else if (inicio === 3) {
        console.log('sair')

    }
}

