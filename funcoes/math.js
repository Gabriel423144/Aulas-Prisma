//console.log(Math.sqrt(225));
//console.log(Math.cbrt(125));

//console.log(Math.floor(Math.random() * 100 + 1));

// Criar uma função que gera um numero aleatorio de 1 a "n"
function geraUmNumeroAleatorio(n) {
    //gera um numero aleatorio de 1 a "n"
    const numeroAleatorio = Math.random() * n + 1;
//arredonda o numero
    const numeroFormatado = Math.floor(numeroAleatorio);

    return numeroFormatado;
}

console.log(geraUmNumeroAleatorio(3))