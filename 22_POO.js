class Empleado {
    constructor(nombre, sueldo) {
        this._nombre = nombre
        this._sueldo = sueldo
    }

    obtenerDetalles() {
        return `Empleado -> Nombre: ${this._nombre0}, Sueldo: ${this._sueldo}`
    }
}

// sobreescritura
class Gerente extends Empleado {
    constructor(nombre, sueldo, cargo) {
        super(nombre, sueldo)
        this._cargo = cargo
    }

    //Sobreescribimos la función de la clase Padre
    obtenerDetalles() {
        return `${super.obtenerDetalles()}, Cargo: ${this._cargo}`
    }
}

// instanceof -> nos permite conocer la clase en la que se basa el objeto
// Puede incluir clases Padre del pbjeto
tipo = function (tipo) {
    console.log(tipo.obtenerDetalles())
    if (tipo instanceof Gerente) {
        console.log(`Objeto de tipo Gerente`)
    }
    if (tipo instanceof Empleado) {
        console.log(`Objeto de tipo Empleado`)
    }
    if (tipo instanceof Object) {
        console.log(`Objeto de tipo Objeto`)
    }
}

empleado1 = new Empleado('Carlos', 12500)
gerente1 = new Gerente('Benito', 5000, `Sistemas`)

tipo(empleado1)
tipo(gerente1)