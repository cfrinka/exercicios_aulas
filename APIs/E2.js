const axios = require('axios')

function breakingBadQuote() {
    return axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    .then(res => {
        const [data] = res.data;
        console.log(`Quem disse '${data.quote}' foi ${data.author}`)
    })
    .catch(error => {
        console.log('tela azul da morte', error)
    })
}
breakingBadQuote()