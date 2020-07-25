const rs = require('readline-sync')
const axios = require('axios')

const inputUsuario = rs.question('Digite yes ou no :' );

function acertouOuErrou(){
    return axios.get('https://yesno.wtf/api')
    .then(res =>{
        if (res.data.answer == inputUsuario){
        console.log('Você acertou')
        return;
        } 
        console.log('Você errou')
    })
    .catch(error => {
        console.log('tela azul da morte', error);
    })
}

acertouOuErrou()



