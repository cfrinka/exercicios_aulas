const axios = require('axios')
const payload = {
    id:9,
    nome: 'Batata assada',
    descricao: 'batata assada com alecrim',
    preco: 10.22,
    categoria_id: 1
}

const getProducts = async () => {
    const result = await axios.get('http://localhost:3000/produtos/?_sort=preco&_order=asc')
        
    
    console.log(result.data)
}

getProducts()