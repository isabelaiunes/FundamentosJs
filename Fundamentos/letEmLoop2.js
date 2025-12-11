const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// imprime 2 e 8 porque let tem escopo de função.
// Isso tem a ver com o conceito de closure, como se uma função tivesse consciência
// do local em que ela foi definida.

// Closure é quando uma função “lembra” das variáveis do lugar onde 
// ela foi criada, mesmo depois que esse lugar já terminou de executar.
// É quando uma função carrega uma memória junto com ela.
// losure é quando uma função continua 
// acessando variáveis de fora mesmo depois que a função de fora já terminou de executar.