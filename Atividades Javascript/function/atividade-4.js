function fatorial(n) {
    if (n < o) return "fatorial não é definido para números negativos";
    let resultado = 1;
    for(let i = 2; i<= n; i++){
        resultado *= i;
    }
    return resultado;
}
console.log(fatorial(5))
