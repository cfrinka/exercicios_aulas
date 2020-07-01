let QtdDivisores = 0
function isPrime(numero){
    for (let contador = 0; contador < numero; contador++){
        if (numero % contador){
            QtdDivisores++
        }
        if (QtdDivisores == 2){
        console.log('O numero é primo')
        }
        else {
            console.log('O número não é primo')
        }

    }
}

console.log(isPrime(2))

// usar o %, se encontrar outro divisor que seja maior que zero ou igual a ele mesmo, não é primo