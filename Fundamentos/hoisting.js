console.log('a =', a)
var a = 2
console.log('a =', a)

// a = undefined
// a = 2
// Hoisting é quando o JavaScript “puxa” a declaração 
// das variáveis e funções para o topo do código antes de executar.

function teste() {
    console.log('b =', b)
    var b = 2
    console.log('b =', b)
}

teste()
// console.log('b =', b) = ReferenceError: b is not defined
// Variável dentro de função não está disponível fora da função.

// console.log('c =', c)
// let c = 2
// console.log('c =', c)
// O hoisting (içamento) não ocorre quando se usa let.

