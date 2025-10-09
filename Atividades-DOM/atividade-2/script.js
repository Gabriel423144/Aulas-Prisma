let aumentar = document.getElementById("Botao")
let contador = 0
let clicks = document.getElementById("clicks")

aumentar.addEventListener("click", () => {
    contador++
    clicks.innerText = contador + " clicks"
})