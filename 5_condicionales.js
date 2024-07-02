let x = 1
if (x == 0) {
    console.log('El número es 0')
} else if (x < 0) {
    console.log('El número es negativo')
} else {
    console.log('El número es positivo')
}

let y = 'char2'

switch (y) {
    case 'char1' :
        console.log('caso ${y}');
        break;
    case 'char2' :
        console.log('prueba ${y}');
        break;
    case 'char3' :
        console.log('sesión ${y}');
        break;
}