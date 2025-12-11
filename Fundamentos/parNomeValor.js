// par Nome/Valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Obejtos são grupos aninhados de chave/valor 
const cliente = {
    nome: 'Marcela',
    idade: 32,
    peso: 74,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 238
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);

// Opa
// Falaaa
// {
//   nome: 'Marcela',
//   idade: 32,
//   peso: 74,
//   endereco: { logradouro: 'Rua Muito Legal', numero: 238 }
// }