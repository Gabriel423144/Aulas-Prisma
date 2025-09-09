// Criando uma lista
const nomes = ["João", "Pedro", "Lucas"];

// Acessando um valor (item)
    console.log(nomes[2]);

// Adicionar um novo item
nomes.push("Paulo");
console.log(nomes);

// Remove o primeiro item da lista
const nomeExcluido = nomes.shift();
console.log("Nome Excluido", nomeExcluido);
console.log("Lista Atualizada:", nomes);

nomes.unshift("Gabriel");
console.log("unshift:", nomes);

// Remover o ultimo item da lista
const nomeRemovido = nomes.pop();
console.log("nome Removido:", nomeRemovido)

// Descobrir o tamanho da lista
console.log("lista atualizada:", nomes.length);

// Função que imprime todos os items da lista
for (let i = 0; i < nomes.length; i++) {
    console.log (nomes[i]);
}