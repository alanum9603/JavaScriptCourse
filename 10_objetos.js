// objetos primitivos
let x = 10;

// objetos
let persona = {
    nombre: `Juan`,
    apellido: `Perez`,
    email: `jperez@gmail.com`,
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ` ` + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.nombreCompleto());

// otros métodos de creación de objetos | dinámico
let persona2 = new Object();
persona2.nombre = `Juan`;
persona2.apellido = `Perez`;

// metodos de acceso 
console.log(persona2.nombre);
console.log(persona2['apellido']);

// ciclo for in
for(nombrePropiedad in persona2){
    console.log(nombrePropiedad + `: ` + persona2[nombrePropiedad]);
}

// agregar propiedades a un objeto ya creado
persona2.tel = 993568076;
console.log(persona2);

// eliminar propiedad de un objeto
delete persona2.tel;
console.log(persona2);

// convertir objeto a arreglo
let personaArray = Object.values(persona);
console.log(personaArray);

// convertir objeto a string
let personaString = JSON.stringify(persona);
console.log(personaString);