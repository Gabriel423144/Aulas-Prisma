function verificarPrimo (numero) {
    if(numero <= 1){
        return false
    }
}
for(let i = numero - 1; i >= 2; i--){
    if(numero % 2 == 0){
        return false
    }
}
return true

let numero = 15
if(verificarPrimo(numero)){
    console.log("Esse numero é primo")
}else{
    console.log("Esse numero não é primo")
}