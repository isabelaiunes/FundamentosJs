// Problemas comuns com this
// Perder a referência: quando você pega um método e passa ele sozinho, 
// this pode deixar de apontar para o objeto.

const pessoa = {
  nome: 'Bela',
  falar: function() { console.log(this.nome); }
};

const falarSozinha = pessoa.falar;
falarSozinha(); // undefined

// Por quê? Porque agora falarSozinha() não é chamado pelo objeto, é chamado sozinho.
// Arrow functions confusas: se você quiser usar this dentro de arrow function, 
// às vezes ele não aponta pro que você espera.
// Funções globais: se você usa this fora de objetos, ele aponta pro objeto global 
// e isso pode causar erros ou comportamento estranho.


const pessoa2 = {
  nome: 'Bela',
  falar: function() { console.log(this.nome); }
};

pessoa.falar();

// Aqui pessoa.falar() → this aponta para pessoa.
// Então ele acha pessoa.nome e imprime "Bela".


const falarSozinha2 = pessoa.falar;
falarSozinha(); 

// O que mudou?
// falarSozinha não é mais chamado pelo objeto pessoa.
// É só uma função solta, sem dono, tipo pegar um pedaço de papel com a função escrita e jogar na mesa.
// Quando você chama falarSozinha(), não tem objeto chamando → this não sabe pra quem apontar.
// No navegador, ele aponta pro objeto global (window) → window.nome não existe → undefined.

const pessoa3 = {
  nome: 'Bela',
  falar: function() { console.log(this.nome); }
};

const falarSozinha3 = pessoa3.falar.bind(pessoa3);
falarSozinha3(); // Bela

// .bind(pessoa) “amarra” a função ao objeto pessoa.
// Agora mesmo chamada sozinha, this continua sendo pessoa.


// Dicas para não se perder
// Sempre que estiver dentro de um objeto, this = o próprio objeto.
// Arrow functions não têm this próprio.
// Se usar funções normais fora de objeto, this = objeto global (no navegador window).
// Se quiser “forçar” pra qual objeto this deve apontar, dá pra usar .bind(), .call(), .apply().