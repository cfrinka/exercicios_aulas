class Usuario {
    constructor(nome, email, endereco, formaPagamento){
        this.nome = nome;
        this.email = email;
        this.endereco = endereco;
        this.formaPagamento = formaPagamento
    }
}

const carlos = new Usuario('Carlos Frinka Neto', 'c.frinkaneto@gmail.com', 'avenida da casa, n. 777', 'numero do cartão')

console.log(carlos)