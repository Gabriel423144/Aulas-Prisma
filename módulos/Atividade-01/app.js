import * as fs from "fs"

fs.readFile("./texto.txt", "utf-8", (err, data) => {
    if(err){
        console.log("Deu merda")
        return
    }
    console.log(data)
}) 

fs.writeFile("./saida.txt", "Ola alunos!", (err) => {
    if(err){
        console.log("Deu merda")
    }
})

import * as calculadora from "./calculadora.js"

console.log(calculadora.multiplicar(1,2));
console.log(calculadora.subtrair(15,3));
console.log(calculadora.somar(6,7));
console.log(calculadora.dividir(10,5));

import * as saudacao from "./saudacao.js"

console.log(saudacao.digaoi("Danilo"));

console.log(saudacao.digatchau("Danilo"));

import * as geometria from "./geometria.js"

console.log(geometria.calculaAreaRetangulo(5, 10));

console.log(geometria.calculaPerimetroRetangulo(5, 10));

console.log(geometria.calculaAreaCirculo(5, 10));

console.log(geometria.calculaCircunferencia(5, 10));