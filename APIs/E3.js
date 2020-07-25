const axios = require('axios')
const rs = require('readline-sync')

const numerodoEpisodio = rs.question('Insira o número de um episódio: ')

function listarElencoETemporada(){
    const URL = `https://www.breakingbadapi.com/api/episodes/${numerodoEpisodio}`;
    
    return axios.get(URL)
    .then(res => {
        
        const [data] = res.data
        console.log(`O elenco do episódio ${numerodoEpisodio} da temporada ${data.season} é ${data.characters}`)
    })
    .catch(error => {
        console.log('O episódio é inválido',error)
    })
}

listarElencoETemporada()