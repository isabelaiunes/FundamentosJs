let contador = 1         // declara contador (variável que controla o laço)
while(contador <= 10) {             // expressão que vai determinar se continua ou não
    console.log(`contador = ${contador}`)
    contador++                       // incremento
}

for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}