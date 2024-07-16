class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada
        this._marca = marca
    }

    get tipoEntrada() {
        return this._tipoEntrada
    }

    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada
    }

    get marca() {
        return this._marca
    }

    set marca(marca) {
        this._marca = marca
    }

    toString() {
        return `Marca: ${this._marca} Tipo de Entrada: ${this.tipoEntrada}`
    }
}

class Raton extends DispositivoEntrada {
    static contadorRatones = 0
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca)
        this._idRaton = Raton.contadorRatones++
    }

    toString() {
        return `ID: ${this._idRaton}, Dispositivo: Raton, ${super.toString()}`
    }
}

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca)
        this._idTeclado = Teclado.contadorTeclados++
    }

    toString() {
        return `ID: ${this._idTeclado}, Dispositivo: Teclado, ${super.toString()}`
    }
}

class Monitor {
    static contadorMonitores = 0
    constructor(marca, tamaño) {
        this._idMonitor = Monitor.contadorMonitores++
        this._marca = marca
        this._tamaño = tamaño
    }

    get idMonitor() {
        return this._idMonitor
    }

    get marca() {
        return this._marca
    }

    set marca(marca) {
        this._marca = marca
    }

    get tamaño() {
        return this._tamaño
    }

    set tamaño(tamaño) {
        this._tamaño = tamaño
    }

    toString() {
        return `ID: ${this._idMonitor}, Dispositivo: Monitor, Marca: ${this._marca}, Tamaño: ${this._tamaño}"`
    }
}

class Computadora {
    static contadorComputadoras = 0
    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = Computadora.contadorComputadoras++
        this._nombre = nombre
        this._monitor = monitor
        this._teclado = teclado
        this._raton = raton
    }

    get idComputadora() {
        return this._idComputadora
    }

    get nombre() {
        return this._nombre
    }

    set nombre(nombre) {
        this._nombre = nombre
    }

    get monitor() {
        return this._monitor
    }

    set monitor(monitor) {
        this._monitor = monitor
    }

    get teclado() {
        return this._teclado
    }

    set teclado(teclado) {
        this._teclado = teclado
    }

    get raton() {
        return this._raton
    }

    set raton(raton) {
        this._raton = raton
    }

    toString() {
        return `[ID: ${this._idComputadora} Nombre: ${this._nombre}]
                [${this._monitor.toString()}]
                [${this._teclado.toString()}]
                [${this._raton.toString()}]`
    }
}

class Orden {
    static contadorOrdenes = 0
    constructor() {
        this._idOrden = Orden.contadorOrdenes++
        this._computadoras = []
        this._contadorComputadorasAgregadas = 0
    }

    agregarComputadora(computadora) {
        this._computadoras[this._contadorComputadorasAgregadas++] = computadora
    }

    monstrarOrden() {
        let res = `ID Orden: ${this._idOrden}, Computadoras: ${this._contadorComputadorasAgregadas}`
        for (let computadora of this._computadoras) {
            res += `\n${computadora.toString()}`
        }
        return res
    }

    toString() {
        return this.monstrarOrden()
    }
}

raton1 = new Raton(tipoEntrada = `Bluetooth`, marca = `Logitech`)
raton2 = new Raton(tipoEntrada = `Cable`, marca = `Microtics`)

teclado1 = new Teclado(tipoEntrada = `Bluetooth`, marca = `Microtics`)
teclado2 = new Teclado(tipoEntrada = `Cable`, marca = `ROG`)

monitor1 = new Monitor(marca = `Samsung`, tamaño = 15.6)
monitor2 = new Monitor(marca = `LG`, tamaño = 14)

computadora1 = new Computadora(nombre = `alanum`, monitor = monitor1, teclado = teclado1, raton = raton1)
computadora2 = new Computadora(nombre = `coke`, monitor = monitor2, teclado = teclado2, raton = raton2)

orden1 = new Orden()
orden1.agregarComputadora(computadora1)
orden1.agregarComputadora(computadora2)

console.log(orden1.monstrarOrden())


