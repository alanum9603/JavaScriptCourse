'use strict';
try {
    let x = 5;
} catch (error) {
    console.log(error)
} finally {
    console.log('continuamos . . . ')
}

// Clausula throw
// Podemos mandar nuestros propios mensajes de error con esta clausula
let y = 5
try {
    if (y == 5) throw 'no es NaN';
} catch (error) {
    console.log(error);
}