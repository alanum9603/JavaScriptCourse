let persona1 = {
    nombre: `Juan`,
    apellido: `Perez`,
    nombreCompleto: function(){
        return this.nombre + ` ` + this.apellido;
    },
    infocontacto: function(tel){
        return this.nombre + ` ` + this.apellido + `\nContacto: ` + tel;
    }
}

let persona2 = {
    nombre: `Carlos`,
    apellido: `Lara`
}

// Uso de apply sin parametros que mandar es parecido a call
console.log(persona1.nombreCompleto());
console.log(persona1.nombreCompleto.apply(persona2));

// Uso de apply con parametros que mandar
console.log(persona1.infocontacto(993568076));

let arreglo = [980664479];
console.log(persona1.infocontacto.apply(persona2, arreglo));