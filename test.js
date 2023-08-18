// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
test('1 Euro deveria ser 1.206 Dollares',function ()  {
    const{fromEurotoDollar} = require('./app.js');
    expect(fromEurotoDollar(3.5)).toBe(4.2);
})

test('1 Dollar deveria ser 106.6  Yenes',function ()  {
    const{fromDollartoYen} = require('./app.js');
    expect(fromDollartoYen(3.5)).toBe(373.09999999999997);
})

test('1 Yen deveria ser 159.9  Pounds',function ()  {
    const{fromYentoPound} = require('./app.js');
    expect(fromYentoPound(3.5)).toBe(559.65);
})

