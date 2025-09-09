let score = 0;
document.getElementById("clickButton").addEventListener("click", function() {
    score++;
    document.getElementById("score").textContent = "Score: " + score;

if ([10].includes(score)) {
    mostrarMensagem("parabens! Você atingiu $(score)");
}else if ([20].includes(score)) {
    mostrarMensagem("parabens desempregado, voce atingiu $(score)");
}
});;