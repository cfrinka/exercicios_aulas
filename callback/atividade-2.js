/* na primeira linha, estamos chamando a lib do FS, para ler o JSON. 
o primeiro console.log apenas nos mostra que o software começou a ser executado
a função callback recebe dois parâmetros, sendo o primeiro um erro e o segundo os dados que serão lidos
dentro da função temos um IF que determina que caso aconteça algum erro, exibirá um console.log de 'aconteceu um erro'
caso não haja erro, continuará a leitura dos dados.

o fs.readFile recebe o arquivo JSON que leremos e uma vez que esse arquivo foi carregado, executa a função "callback"
para validar se os dados estão ok ou se há algum erro neles.

por ultimo temos um console.log que nos diz que a leitura dos dados está acontecendo, note que esse console.log deverá 
aparecer imediatamente depois do "iniciando software", para que saibamos que o JSON ainda está sendo importado e validado.



  
  
  
  
  
  
  
  
  
  
  */