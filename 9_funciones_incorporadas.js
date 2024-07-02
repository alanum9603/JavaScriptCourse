let txt = 'Hola Mundo';
// obtener largo de una cadena
console.log(txt.length)

// recorrer una cadena por caracter
for(i = 0;i < txt.length; i++){
    console.log(i + ' - ' + txt[i])
};

// substring(indice_inicio, indice_fin - 1)
// no se incluye el ultimo indice en caracter fin
let subtxt1 = txt.substring(0,4);
let subtxt2 = txt.substring(5, 10);
let subtxt3 = txt.substring(5); 
console.log(txt);
console.log(subtxt1);
console.log(subtxt2);
console.log(subtxt3);

// concatenación de variables de texto 
let txt1 = `Hola`;
let txt2 = `Mundo`;
console.log(txt1 + " " + txt2);
console.log(`${txt1} ${txt2}`)