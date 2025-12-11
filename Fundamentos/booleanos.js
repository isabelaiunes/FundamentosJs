let isAtivo = false;    
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1
console.log(!!isAtivo);

// Em JavaScript, o número 1 é considerado um valor TRUTHY → ou seja, equivale a true.
// Primeiro ! será false.
// Segundo ! será true.

console.log("Os Verdadeiros (true): ");
console.log(!!3);
console.log(!!-1);
console.log(!!' ');  // Espaços e texto
console.log(!![]);   // Arrays
console.log(!!{})    // Obejto literal
console.log(!!Infinity) 
console.log(!!(isAtivo = true)); 

console.log("Os Falsos (false): ");
console.log(!!0);
console.log(!!''); // String vazia
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Para finalizar, OU: ");
console.log(!!('' || null || 0 || ' ')); // A última opção é verdadeira, portanto será true.
console.log(('' || null || 0 || 'epa')); // Retorna a primeira opção verdadeira "epa".

let nome = ''
console.log(nome || "Desconhecido"); // Se tem nome, imprime nome, senão imprime Desconhecido.

nome = 'Mariana'
console.log(nome || "Desconhecido"); // Tem nome, imprime nome.

//RESUMO:
// true (TRUTHY):
// 1
// -1
// " "
// "texto"
// []
// {}
// Infinity

// Valores que viram false (FALSY):
// false
// 0
// ""        // string vazia
// null
// undefined
// NaN