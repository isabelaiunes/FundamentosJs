for (let i = 0; i < 10; i++) {
    console.log(i);
}

// console.log('i =', i)

// let i cria a variável i
// Ela existe somente dentro do bloco { } do for
// O console.log(i) imprime:
// 0 1 2 3 4 5 6 7 8 9
// Na última linha "console.log('i =', i)" está tentando usar i fora do bloco onde ela foi criada.
// Mas como você usou let, ela tem:
// escopo de bloco (se colocou ela no for ela fica só ató onde for acaba).
// Ou seja:
// i morre quando o for termina
// Fora do { }, ela não existe mais
// Então o JavaScript gera:
// ReferenceError: i is not defined
// Pode colocar ela fora do for e esse problema não aconteceria:

let k;   // k está fora do "for"

for (k = 0; k < 10; k++) {
    console.log(k);
}

console.log('k =', k); // agora funciona, vai dar k = 10.

// Pode-se usar o var para desviar isso, mas não é recomendado.
