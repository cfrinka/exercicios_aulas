/* 
a primeira linha é a importação da lib do FS
o primeiro console.log nos mostra que o programa está sendo iniciado
a const readFile é uma arrow function que recebe uma Promise e suas ações caso seja resolvida ou rejeitada
o fs.readFile recebe o caminho do arquivo JSON e uma função de callback que irá retornar os dados do JSON ou um erro
o if mostra que caso haja erro, devemos retornar um reject para a Promise
o resolve(JSON.parse(dado)) retonar a resolução da Promise, exibindo os dados do JSON

o readfile('arquivo.json') faz a leitura do arquivo JSON
o .then nos diz que caso o retorno da promise seja positivo, exibirá um console.log do item
o .catch nos diz que caso o retorno da promise seja negativo, exibirá um console.log de erro

o console.log('Lendo Arquivo') apenas diz que o arquivo está sendo lido, esse será exibido antes que a arrow function readFile
comece a ser executada, toda a resolução da arrow function acontece simulatneamente, mas só dá seus retornos (positivo ou negativo)
após essa mensagem ser exibida












*/