class Usuario {
    constructor(nome, email, endereco, formaPagamento){
        this.nome = nome;
        this.email = email;
        this.endereco = endereco;
    }
}

class Motorista extends Usuario{
    constructor(nome, email, endereco, placaCarro){
        super(nome, email, endereco)
        this.placaCarro = placaCarro;
    }
}

class Passageiro extends Usuario{
    constructor(nome, email, endereco, formaPagamento){
        super(nome,email,endereco)
        this.formaPagamento = formaPagamento
    }
}

const carlos = new Passageiro('Carlos Frinka Neto', 'c.frinkaneto@gmail.com', 'avenida da casa, n. 777', 'numero do cartão')
const carlosMotorista = new Motorista('Carlos F. N.','motorista@carlos.com', 'endereco do motorista', 'placa do carro')

console.log(carlos)
console.log(carlosMotorista)