let texto = document.getElementById("texto")
let contador = localStorage.getItem("ab")
let clicks = document.getElementById("botao")

texto.innerHTML = contador + " cookies"

clicks.addEventListener("click", () => {
    contador++
    localStorage.setItem("ab", contador)
    texto.innerHTML = contador + " cookies"
})