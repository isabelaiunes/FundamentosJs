function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({ max: 50, min: 40 }));

console.log(rand({min: 955}));

const obj = { max: 50, min: 40 }
console.log(rand(obj));

console.log(rand({}));

// console.log(rand());
// rand({}) funciona porque você passa um objeto vazio que pode ser desestruturado; 
// rand() não funciona porque não passa objeto nenhum (undefined).
// rand() → você tenta abrir uma caixa que não existe.
// rand({}) → você abre uma caixa vazia, mas a caixa existe.