const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// os resultados de ambas serão 10, pois var não tem escopo de BLOCO.
// Valor que fez i sair do laço (loop). i = 10.
// Parênteses de for não criam função; só function cria escopo de função.