const fs = require('fs');

fs.readFile('entrada.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  const textoMaiusculo = data.toUpperCase();

  fs.writeFile('saida.txt', textoMaiusculo, (err) => {
    if (err) {
      console.error('Erro ao escrever o arquivo:', err);
      return;
    }

    console.log(textoMaiusculo);
  });
});