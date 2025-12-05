// Armazenando uma função em uma variável e/ou constante.
const imprimirSoma = function (a , b) {
    console.log(a + b)
}

imprimirSoma(7 , 8);

// Armazenando uma função Arrow em uma variável. A setinha substitui o nome function.
const soma = (a, b) => {
    return a + b
}

console.log(soma(7, 8));

// Retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(8, 7));
