function validModel(model){
    return {
        'samsung': '1000,00 R$',
        'apple' : '105,00 R$',
        'xiaomi' : '150,00 R$',
        'lg' : '200,00 R$',
    }[model];
}
function getPriceByModel() {
    let result = document.getElementById('result');
    let model = document.getElementById('model').value
    model = String(model)
    let price = 0

    if (!model || !pricing){
        return null;
    }
   
    let pricing = validModel(model);

    result.innerText = `O seu modelo é ${model} e custa ${pricing}`



    
}