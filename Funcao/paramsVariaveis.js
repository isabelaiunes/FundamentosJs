function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1.1, 2.2, 3.3))
console.log(soma())
console.log(soma(1))

console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))

// versão não moderna
// arguments é objeto que funciona parecido com array.
// pode usar nums que realmente funciona como array.

function soma(...nums) {
    let soma = 0
    for (let n of nums) {
        soma += n
    }
    return soma
}
console.log(soma(1.1, 2.2, 3.3))

// Versão mais moderna usando ...nums e reduce

function soma(...nums) {
    return nums.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
}

console.log(soma(1.1, 2.2, 3.3))  // 6.6

// Como funciona:
// ...nums → rest parameter: transforma todos os argumentos passados em um array real chamado nums.
// reduce((acumulador, valorAtual) => acumulador + valorAtual, 0):
// acumulador → vai acumulando a soma
// valorAtual → cada número do array
// 0 → valor inicial do acumulador
// Retorna a soma de todos os elementos do array.
// Vantagens dessa versão:
// Não precisa do arguments, que é mais antigo.
// Funciona para qualquer quantidade de argumentos.
// Código curto, limpo e fácil de entender.

// Versão curta usando arrow function de forma moderna:

const somar = (...nums) => nums.reduce((a, b) => a + b, 0)
console.log(somar(1.1, 2.2, 3.3))  // 6.6
