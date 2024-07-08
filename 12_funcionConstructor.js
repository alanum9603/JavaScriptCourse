// Funcion constructor de objetos de tipo Persona

function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(tel){
        this.tel = tel;
        return this.nombre + ` ` + this.apellido + `\nContacto: ` + tel
    };
}

let padre = new Persona(`Juan`, `Perez`, `jperez@gmail.com`);
console.log(padre);

let madre = new Persona(`Laura`, `Quintero`, `lquintero@gmail.com`);
console.log(madre);

padre.nombre = `Carlos`;
console.log(padre);
console.log(madre);
console.log(padre.nombreCompleto(993568076))

