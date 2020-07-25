const axios = require('axios')
const rs = require('readline-sync')

const inputCEP = rs.question('Digite apenas os numeros do seu CEP: ')

function consultaCEP() {
    const CEP = inputCEP

    return axios.get(`https://api.postmon.com.br/v1/cep/${CEP}`)
    .then(res => {
        const data = res.data
        console.log(`Este CEP pertence à ${data.logradouro}, ${data.bairro}, ${data.cidade}, ${data.estado_info.nome}`)
    })
    .catch(error => {
        console.log(`CEP inválido`, error)
    })
}

consultaCEP()