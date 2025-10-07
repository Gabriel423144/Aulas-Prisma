// Função de Multiplicação
// Crie uma função que receba dois números como parâmetros e retorne a multiplicação deles.

function multiplicacao(x, y){
    return x * y
}

//console.log(multiplicacao(2,2000))

//Função para Calcular Média
//Desenvolva uma função que receba um array de números e retorne a média deles.

function calculaMedia(numeros = [2, 4, 6, 8]){
    let soma = 0
    for(let i = 0; i < numeros.length; i++){
        soma += numeros[i]
    }
    // console.log(soma/numeros.length)

    return soma / numeros.length
}

let lista = [2, 6, 8, 4, 6, 8, 9, 10, 15]
console.log(calculaMedia(lista))

// console.log(lista)          // Lista Completa
// console.log(lista[1])       // Elemento da Lista
// console.log(lista.length)   // Quantidade

// for(let contador = 0; contador < lista.length; contador++){
//     console.log(lista[contador])
// }