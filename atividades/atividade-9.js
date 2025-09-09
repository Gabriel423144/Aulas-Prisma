const produtos = [
    { nome: "laranja", preco: 5},
    {nome: "pepino", preco: 6},
    {nome: "pirulito", preco:1},
    {nome: "morango do amor", preco: 15},
];
function produtomaiscaro(produtos) {
    let maiscaro = produtos [0];
for(let i = 1; i< produtomaiscaro.length; i++){
    if (produtos[i].preco > maiscaro.preco){
        maiscaro = produtos[i];
    }
}
return maiscaro;
}
const maiscaro = produtomaiscaro(produtos);
console.log("produto mais caro", maiscaro);