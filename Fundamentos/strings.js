// String é uma cadeia de caracteres que pode ser delimitado por três símbolos.
// "Aspas duplas", 'Aspas simples' e `crase`.

console.log(`crase`);
console.log('aspas simples');
console.log("aspas duplas");

const escola = "Peixonauta"
console.log(escola.charAt(4));

// charAt() vai mostrar a letra que está no índice selecionado. Começa a contagem do 0.
// Índice 0 seria o "P", 1 seria o "e" e assim por diante.

console.log(escola.charCodeAt(3));

// charCodeAt() retorna o código numérico (Unicode) 
// de um caractere em uma posição específica de uma string.
// Um código Unicode é simplesmente um número que representa um caractere.
// Porque o computador não entende letras.
// Ou seja, Unicode é a linguagem universal que transforma 
// letras, números, símbolos e emojis em números para o computador entender.
// codePointAt() é mais completo.

console.log(escola.indexOf('x'));

// indexOf() procura um valor dentro de uma string ou array
// e retorna a posição (índice) onde esse valor aparece.
// Se não encontrar, ele retorna: -1.

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

// O substring() é um método de strings em JavaScript que serve para recortar um pedaço do texto.
// substring(1) corta a string a partir do índice 1 até o final, removendo o primeiro caractere.
// eixonauta
// substring(0, 3) vai do índice 0 até o 3, sem incluir o 3.
// Pei

console.log("Escola ".concat(escola).concat("!"));
console.log("Escola " + escola + "!");

// concat() serve para juntar uma string com outra.

console.log(escola.replace('u', 'l'));
console.log(escola.replace(/\w/g, 'l'));

// O replace() substitui a PRIMEIRA ocorrência de um caractere (ou texto) por outro.
// string.replace(oQueQueroTrocar, novoValor)
// (/\d/) é para mudar todos digitos numéricos do texto pelo novo valor
// /\w/g é para mudar todos caracteres do texto pelo novo valor.
// \w = “qualquer caractere de palavra”. g = “troque TODAS as ocorrências, não só a primeira”.
// Se você tirasse o g, só a primeira letra mudaria. "leixonauta".

console.log('Ana,Maria,Pedro'.split(','));

// O split() quebra uma string em várias partes, usando um separador. 
// O resultado final é um array.
// [ 'Ana', 'Maria', 'Pedro' ]


// crase
// aspas simples
// aspas duplas
// o
// 120
// 3
// eixonauta
// Pei
// Escola Peixonauta!
// Peixonalta
// llllllllll
// [ 'Ana', 'Maria', 'Pedro' ]