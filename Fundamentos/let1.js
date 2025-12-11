var numero = 1
{
    let numero = 2
    console.log('Dentro:', numero)
}

console.log('Fora:', numero)

// Dentro: 2
// Fora: 1

let numero2 = 1
{
    let numero2 = 2
    console.log('Dentro:', numero2)
}

console.log('Fora:', numero2)

// Dentro: 2
// Fora: 1
// let tem um escopo mais abrangente.