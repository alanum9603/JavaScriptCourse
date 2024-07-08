// FUncion -- Retorna algo
function suma(n1, n2) {
    let res = n1 + n2;
    return res
}

operacion = suma(5, 4);
console.log(operacion)

// Procedimiento -- No retorna nada, solo ejecuta un procedimiento
function imprimir(mensaje) {
    console.log(mensaje);
}

msg = 'Hola, mundo';
imprimir(msg);

/*
Nota:
    Se les llama parametros a los valores que se van a recibir y están definidos dentro de una función
    entre los parentesis
    Los argumentos son los valores que se envían cuando se llama a la función
*/

// Recursividad
// con esta función recursiva podemos mostrar los números que que comprenden entre num hasta el 0 
// sin necesidad de un for
function miRecursiva(num) {
    if(num > 0) {
        console.log(num);
        miRecursiva(num - 1)
    }
}

let num = 5;
miRecursiva(5);

