// O que é this?
// Pensa no this como um apontador para “quem é o dono daquilo que está acontecendo agora”.
// Ou seja, ele aponta para o objeto que está usando algo naquele momento.

// Pra que serve?
// this serve pra acessar propriedades e métodos de um objeto sem precisar saber o nome do objeto na hora.

const pessoa = {
  nome: 'Bela',
  falar: function() {
    console.log('Oi, meu nome é ' + this.nome);
  }
};

pessoa.falar(); // Oi, meu nome é Bela

// Explicando:
// this.nome aqui significa “o nome do objeto que está chamando o método falar”.
// Então ele olha pra dentro do objeto pessoa e acha nome: 'Bela'.

// Como this se comporta
// O comportamento do this muda dependendo de onde e como você usa ele. 
// Exemplo 1: this dentro de função de objeto

const cachorro = {
  raca: 'Labrador',
  mostrarRaca: function() {
    console.log(this.raca);
  }
};

cachorro.mostrarRaca(); // Labrador

// Aqui this = cachorro (porque o objeto cachorro chamou a função).
// Exemplo 2: this em função normal fora de objeto.

// function dizerOi() {
//   console.log(this);
// }

// dizerOi();

// Se você estiver no navegador, this aponta para o objeto global window.
// Se estiver no Node.js, this aponta para {} vazio (ou global em algumas situações).

//Exemplo 3: this dentro de arrow function

const pessoa1 = {
  nome: 'Bela',
  falar: () => {
    console.log(this.nome);
  }
};

pessoa1.falar(); // undefined

// Arrow functions não criam seu próprio this. Elas usam o this do lugar onde foram criadas.
// Por isso aqui deu undefined.

