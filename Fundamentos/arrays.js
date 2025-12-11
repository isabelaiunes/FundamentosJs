const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);  // 7.7 9.2
console.log(valores[4]);  // Quando não encontra ele imprime "undefined".

valores[4] = 10;
console.log(valores);  // Adiciona o índice 4 no array.
console.log(valores[4]);

valores[10] = 13
console.log(valores); // "[ 7.7, 8.9, 6.3, 9.2, 10, <5 empty items>, 13 ]
console.log(valores.length); // Verifica tamanho do array. 11

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

console.log(valores.pop()); // Imprime o último valor do Array.

delete valores[0];
console.log(valores); // Tira o índice 0 e fica um espaço vazio. <1 empty item>.

console.log(typeof valores); // Um array é do tipo object.