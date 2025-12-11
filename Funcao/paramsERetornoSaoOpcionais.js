function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(5, 5))  // o bloco if não return nada, então aparece undefined automaticamente.
console.log(area(2, 2))  // cai no else e else return area, aparece a área calculada.
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22, 44))