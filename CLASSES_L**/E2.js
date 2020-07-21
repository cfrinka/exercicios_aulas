class Usuario {
    constructor(nome, email, endereco, formaPagamento){
        this.nome = nome;
        this.email = email;
        this.endereco = endereco;
        this.formaPagamento = formaPagamento
    }
            newAddress(novoEndereco){
            return this.endereco = novoEndereco
    }

        novaCorrida(destino){
            return `Estamos procurando um motorista para você ir até ${destino}`
    }
}

const carlos = new Usuario('Carlos Frinka Neto', 'c.frinkaneto@gmail.com', 'avenida da casa, n. 777', 'numero do cartão')

carlos.newAddress('novo endereço')
console.log(carlos)

//console.log(carlos)
// console.log(carlos.novaCorrida('Rio'))