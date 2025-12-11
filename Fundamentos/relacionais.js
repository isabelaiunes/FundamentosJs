console.log('01)' , '1' == 1);
console.log('02)' , '1' === 1);  // estritamente igual? não. string x number.
console.log('03)' , '3' != 3);   // diferente   
console.log('04)' , '3' !== 3);  // estritamente diferente? sim. string x number.

console.log('05)' , 3 < 2);
console.log('06)' , 3 > 2);
console.log('07)' , 3 <= 2);
console.log('08)' , 3 >= 2);

const d1 = new Date(0);
const d2 = new Date(0);

console.log('09)' , d1 === d2);
console.log('10)' , d1 == d2);

// FALSE, porque em JavaScript:
// Objetos são comparados por REFERÊNCIA na memória, não por valor.
// Mesmo que: d1 e d2 representem a mesma data,
// eles são dois objetos diferentes na memória.
// Mesmo conteúdo, caixas diferentes.
// d1 == d2 também é false porque, 
// quando os dois lados são objetos, o == não compara valores — só as referências na memória.

console.log('11)' , d1.getTime() === d2.getTime()); // compara números, não referências.
console.log('12)' , d1.getTime() == d2.getTime()); // compara números, não referências.
console.log('13)' , undefined == null); 
console.log('14)' , undefined === null); 

// 13) true. undefined só é considerado igual a null (e a mais nada).
// 14) false. mesmo valor, tipos diferentes.