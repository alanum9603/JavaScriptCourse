// Sintaxis normal de función - Tiene Hoisting
function miFuncion1() {
    return 5;
}

// Segunda opción de sintaxis de función flecha - No tiene Hoisting
let miFuncion2 = function () {
    return 3;
}

// Sintaxis funciones flecha - No tiene Hoisting
// se puede usar const o let para declarar las funciones
// debido a que no se plantea modificar el valor de la variable a futuro
const miFuncionFlecha = () => {
    return 'hola';
}

// Funcion flecha en una sola línea
const miFuncionFlecha2 = () => 25;



console.log(miFuncion1())
console.log(miFuncion2())
console.log(miFuncionFlecha())
console.log(miFuncionFlecha2())
