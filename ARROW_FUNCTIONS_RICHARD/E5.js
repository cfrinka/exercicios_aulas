const mostraIdade = ({idade}) => idade
const mostraNome = ({nome}) => nome


const usuario = {
    nome: "Mayara", 
    idade: 25
}
const idadeUsuario = mostraIdade(usuario)
const nomeUsuario = mostraNome(usuario)


console.log(`A idade de ${nomeUsuario} é ${idadeUsuario} anos`)