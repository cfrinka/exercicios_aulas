/* 
a primeira linha é a importação da lib FS
a segunda é um console.log nos dizendo que o programa começou a rodar
a const readFile é uma arrow function que recebe uma Promise
o fs.readFile recebe o caminho do arquivo JSON e os parametros de erro e dados
o if nos diz que se houver um erro, devemos rejeitar a promise e retornar como erro
o resolve nos diz que se não houver erro, devemos seguir com a leitura dos dados 

a const lerArquivo recebe uma arrow function assincrona com try e catch
o try nos diz que caso não haja erro, deve esperar a leitura do 'arquivo.json' e então exibir o conteúdo desse JSON
o catch nos diz que caso haja um erro, deve retornar uma mensagem de erro em um console.log

executamos então a função lerArquivo

a última linha é uma mensagem indicando que o arquivo está sendo lido pelo sistema, esta deve aparecer antes do retorno 
da promise





*/