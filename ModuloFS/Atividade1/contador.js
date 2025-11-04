import * as fs from "fs"

fs.readFile("./frases.txt", "utf-8", (erro, dados) => {
    if(erro){
        console.log("Problema na leitura de arquivo", erro)
        return
    }

    let frase = dados.split(" ")
    console.log("o arquivo tem " + frase.length + " palavras")
})