// esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7, 3))

/* 1 euro son 1.2 dolares,
     1 euro = 127.9 yenes
     1.2 dolares = 127.9 yenes
     1 dolar = 106.6 yenes
     */
const fromDollartoYen = function (valueInYen) {
    let valueInDollar = valueInYen * 106.6
    return valueInDollar
    
}
const fromEurotoDollar = function (valueInEuro) {
    let valueInDollar = valueInEuro * 1.2
    return valueInDollar
    
}
const fromYentoPound = function (valueInPound) {
    let valueInYen = valueInPound * 159.9
    return valueInYen
    
}

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum,fromDollartoYen,fromEurotoDollar, fromYentoPound };



