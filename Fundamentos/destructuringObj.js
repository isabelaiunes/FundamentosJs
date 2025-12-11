// Desestruturação é uma forma de tirar valores 
// de objetos ou arrays e colocá-los em variáveis de forma rápida e direta.

const pessoa = {
    nome: 'Felipe',
    idade: 5,
    endereco: {
        logradouro: 'Rua dos Cristais',
        numero: 1000
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep } } = pessoa; 
console.log(logradouro, numero, cep);