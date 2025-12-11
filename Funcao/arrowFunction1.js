let dobro = function (a) {
    return 2 * a
}
console.log(dobro(Math.PI));


dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI));


let oi = function () {
    return 'Oi'
}
console.log(oi());


ola = () => 'Olá'
console.log(ola());


hello = _ => 'Hello' // possui um parametro
console.log(hello());