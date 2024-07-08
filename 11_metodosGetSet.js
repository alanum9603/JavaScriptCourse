let persona = {
    nombre: `Carlos`,
    apellido: `Huascar`,
    email: `carlosh@gmail.com`,
    edad: 28,
    idioma: `es`,
    // metodo get
    get lang(){
        return this.idioma.toUpperCase();
    },
    //metodo set
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ` ` + this.apellido;
    }
}

console.log(persona.nombreCompleto)
// llamando al metodo get
console.log(persona.lang);
// llamando al metodo set
persona.lang = `en`
console.log(persona.lang);