const peso1 = 1.0;
const peso3 = 1.1;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso3));
console.log(Number.isInteger(peso2));

// "isInteger" pergunta se o número é inteiro. 1.0 será inteiro (1), mas 1.1 já não será.
// 1 2
// true
// false
// true

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

// Função "toFixed" é usada para arrumar as casas decimais.
console.log(media.toFixed(2));
console.log(typeof media);
console.log(typeof Number);  // É uma função.

// Função "toString" transforma o dado em String (texto).
console.log(media.toString());

// Para colocar o string em binário, coloca-se o número 2.
console.log(media.toString(2));
