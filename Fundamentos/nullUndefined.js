let valor; // não inicializada
console.log(valor);  // Undefined
// console.log(valor2) //  is not defined

valor = null; // ausência de valor
console.log(valor);
// console.log(valor.toString()) // Erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined // Não atribua undefined!!
console.log(!!produto.preco);
// delete produto.preco para deletar o valor. Não usar undefined.
console.log(produto);

produto.preco = null // Produto sem preço.
console.log(!!produto.preco);
console.log(produto);