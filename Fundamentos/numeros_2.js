console.log(7 / 0);
// JS tem um tipo chamado Infinity para números divididos por 0.

console.log("10" / 2);
console.log('3' + 2);
// Em JS, varifica-se a string pode ser convertida a número para realizar a divisão. 
// Se ele não conseguir, dá erro. "NaN (Not a Number).
// O + concatena strings, não soma.

console.log("Show" * 2);
// NaN.

console.log(0.7 + 0.1);
// O resultado não dá 0.8 exato por causa da especificação do tipo de operações em ponto flutuante
// que o JS suporta. Então fica 0.7999999999999999. (Menos lenta).

console.log((10.345).toFixed(2));
console.log((10).toFixed(2));
console.log((10).toString());
// console.log(10.toString()); Consegue fazer sob o "Number", mas não sob o número literal. 
// Usar parênteses.

// Infinity
// 5
// 32
// NaN
// 0.7999999999999999
// 10.35
// 10.00
// 10