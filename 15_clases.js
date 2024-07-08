class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get telf(){
        return this._telf;
    }

    set telf(telf){
        this._telf = telf;
    }

    get nombreCompleto(){
        return this._nombre + ` ` + this._apellido
    }
}

let persona1 = new Persona(`Juan`, `Perez`);
console.log(persona1);

let persona2 = new Persona(`Carlos`, `Lara`);
console.log(persona2);

console.log(persona2.telf);
persona2.telf = 993568076;
console.log(persona2);