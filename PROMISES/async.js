function random(max){
    return Math.random()*max
}
function simulateDownload(){
    setTimeout(() => {
        console.log('Imagem baixada')
    }, random(1000))
}
function asyncDownload() {
    console.log('Renderizando página')
    simulateDownload()
    console.log('Donwload concluido')
}
asyncDownload()