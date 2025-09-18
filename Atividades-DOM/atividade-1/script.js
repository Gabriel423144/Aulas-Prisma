let aumentar = document.getElementById("BotaoIncrementar");
let contador = 0;
let diminuir = document.getElementById("BotaoDecrementar");
const texto = document.getElementById("titulo");
const body =document.getElementById("corpo")
body.style.backgroundColor = "White"

aumentar.addEventListener ("click", () => {
    contador++
texto.innerText = "contador" + contador
})
;
diminuir.addEventListener ("click", () => {
    contador--;
  texto.innerText = "contador" + contador
});