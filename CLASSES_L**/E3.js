class Usuario {
    constructor(nome, email, endereco, formaPagamento){
        this.nome = nome;
        this.email = email;
        this.endereco = endereco;
        this.formaPagamento = formaPagamento
    }

    static calculaValorCorrida(km){
        const valorFinal = km * 1.20
        return `O valor final é R$${valorFinal}`
    }
}

const carlos = new Usuario('Carlos Frinka Neto', 'c.frinkaneto@gmail.com', 'avenida da casa, n. 777', 'numero do cartão')

console.log(Usuario.calculaValorCorrida(7))