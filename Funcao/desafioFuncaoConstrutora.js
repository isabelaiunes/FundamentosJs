function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Oi, eu sou ${this.nome}`)
    }
}

const p1 = new Pessoa("Isabela")
const p2 = new Pessoa("Maria")

p1.falar() // Oi, eu sou Isabela