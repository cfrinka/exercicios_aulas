const axios = require('axios')

const zeroPadding = (number) =>{
    return String(number).padStart(2, '0')
}

async function pegarNovosCasosConfirmadosNoUltimoMes(pais){
    const hoje = new Date();
    const dia = hoje.getDate();
    const mes = hoje.getMonth() +1;
    const ano = hoje.getFullYear()

    const dataInicio = `${ano} - ${zeroPadding(mes -1)} - ${dia} T00:00:00Z`;
    const dataFim = `${ano} - ${zeroPadding(mes)} - ${dia} T00:00:00Z`;
    const filtroData = `from=${dataInicio}&to=${dataFim}`;

    const result = await axios.get(
        `https://api.covid19api.com/total/country/${pais}/status/confirmed?${filtroData}`);
    
    const casosPorDia = result.data;

    return casosPorDia[casosPorDia.length - 1].Cases - casosPorDia[0].Cases;

}

pegarNovosCasosConfirmadosNoUltimoMes("canada")
  .then(console.log)
