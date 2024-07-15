class Persona {
    static contadorPersonas = 0
    constructor(nombre = String, apellido = String, edad = Number) {
        this._idPersona = contadorPersonas++
        this._nombre = nombre
        this._apellido = apellido
        this._edad = edad
    }

    get idPersona() {
        return this._idPersona
    }

    get nombre() {
        return this._nombre
    }

    set nombre(nombre = String) {
        this._nombre = nombre
    }

    get apellido() {
        return this._apellido
    }

    set apellido(apellido = String) {
        this._apellido = apellido
    }

    get edad() {
        return this._edad
    }

    set edad(edad = Number) {
        this._edad = edad
    }

    toString() {
        return `ID: ${this._idPersona}\nNombre completo: ${this._nombre} ${this._apellido}\nEdad: ${this._edad}`
    }
}

class Empleado extends Persona {
    constructor(nombre = String, apellido = String, edad = Number, sueldo = Number) {
        super(nombre, apellido, edad)
        this._idEmpleado = super.idPersona
        this._sueldo = sueldo
    }

    get idEmpleado() {
        return this._idEmpleado
    }

    get sueldo() {
        return this._sueldo
    }

    set sueldo(sueldo = Number) {
        this._sueldo = sueldo
    }

    toString() {
        return super.toString() + `\nSueldo: ${this._sueldo}`
    }
}

class Cliente extends Persona {
    constructor(nombre = String, apellido = String, edad = Number, fechaRegistro = Date()) {
        super(nombre, apellido, edad)
        this._idCliente = super.idPersona
        this._fechaRegistro = fechaRegistro
    }

    get idCliente() {
        return this._idCliente
    }

    get fechaRegistro() {
        return this._fechaRegistro
    }

    set fechaRegistro(fechaRegistro = Date()) {
        this._fechaRegistro = this.fechaRegistro
    }

    toString() {
        return super.toString() + `\nFecha de registro: ${this._fechaRegistro}`
    }
}

