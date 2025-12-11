console.log(typeof console); // Objeto
console.log(Math.ceil(6.1)); 

// Math.ceil SEMPRE arredonda o número para CIMA, 
// para o próximo inteiro, mesmo que a parte decimal seja pequena.

// Math.floor(6.9) // 6  → arredonda pra BAIXO
// Math.round(6.4) // 6 → arredonda pro MAIS PRÓXIMO
// Math.round(6.5) // 7 → arredonda pro MAIS PRÓXIMO
// Math.ceil(6.1)  // 7 → arredonda pra CIMA

const obj1 = {};
obj1.nome = 'Bola';
// obj1['nome'] = 'Bola2'
console.log(obj1.nome);

function obj (nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...');
    }
}

const obj2 = new obj('Cadeira');
const obj3 = new obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();