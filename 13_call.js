let persona1 = {
    nombre: `Juan`,
    apellido: `Perez`,
    nombreCompleto: function (tel) {
        return this.nombre + ` ` + this.apellido + `\n Contacto: ` + tel;
    }
}

let persona2 = {
    nombre: `Carlos`,
    apellido: `Lara`
}

// Uso de call
// se puede llamar a los metodos de persona1 para usar los datos de persona2 
console.log(persona1.nombreCompleto(993568076));
console.log(persona1.nombreCompleto.call(persona2, 980664479));