const fs = require('fs');

const agora = new Date();

const dataFormatada = agora.toISOString().replace('T', ' ').substring(0, 19); 

const novaEntrada = `[${dataFormatada}] Nova entrada de log.`;

fs.appendFile('log.txt', novaEntrada, (err) => {
  if (err) {
    console.error('Erro ao adicionar a entrada:', err);
    return;
  }

  console.log('Nova entrada adicionada com sucesso ao log!');
});