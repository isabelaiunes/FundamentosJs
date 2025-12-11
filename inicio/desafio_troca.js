// O objetivo do desafio é que se troque os valores de x = 7 e y = 94 
// de forma que depois da troca o valor da variável fique x = 94 e y = 7.

let e = 7;
let f = 94;

[e, f] = [f, e]

console.log(e);
console.log(f);

// Opção 2

let c = 7;
let d = 94;

let temp = c;
c = d;
d = temp;

console.log(c);
console.log(d);

