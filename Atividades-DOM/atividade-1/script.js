let aumentar = document.getElementById("BotaoIncrementar");
let titulo = document.getElementById("titulo")
let botaoTitle = document.getElementById("BotaoTitulo")
let contador = 0;
let diminuir = document.getElementById("BotaoDecrementar");
const texto = document.getElementById("tituloContador");
const body = document.getElementById("corpo");
let botao = document.getElementById("Add");
let lista = document.getElementById("lista");
let Seletor = document.getElementById("seletor");
body.style.backgroundColor = "gray";
const btnRemover = document.getElementById("BotaoRemover");
let exibir = document.getElementById("ex")
let esconder = document.getElementById("es")
let textoexes =  document.getAnimations("p")

exibir.addEventListener("click", () => {
  textoexes.style.display = block
})

esconder.addEventListener("click", () => {
  textoexes.style.display = none
})

botaoTitle.addEventListener("click", () => {
  titulo.innerText = "site de testes"
})

btnRemover.addEventListener("click", () => {
  if (lista.lastChild) {
    lista.removeChild(lista.lastChild);
  }
});

botao.addEventListener("click", () => {
  let item = document.createElement("li");
  item.innerText = "novo item";
  lista.appendChild(item);
});

aumentar.addEventListener("click", () => {
  contador++;
  texto.innerText = "contador" + contador;
});

diminuir.addEventListener("click", () => {
  contador--;
  texto.innerText = "contador" + contador;
});

Seletor.addEventListener("input", (color) => {
  body.style.backgroundColor = Seletor.value;
});
