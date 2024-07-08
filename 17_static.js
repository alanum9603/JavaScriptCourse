class Persona{
    constructor(nombre,apellido){
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

    nombreCompleto() {
        return this._nombre + ` ` + this._apellido;
    }

    static difolt(){
        return `prueba método static`;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    nombreCompleto() {
        return super.nombreCompleto() + `\nDpto: ` + this._departamento;
    }
}

persona1 = new Persona(`Juan`, `Perez`);
console.log(persona1);

persona2 = new Persona(`Hilario`, `Lopez`);
console.log(persona2);

empleado1 = new Empleado(`Ivan`, `Chumbe`, `VES`);
console.log(empleado1);

empleado2 = new Empleado(`Mario`, `Jimenez`, `VMT`);
console.log(empleado2);

console.log(Persona.difolt());
console.log(Empleado.difolt());