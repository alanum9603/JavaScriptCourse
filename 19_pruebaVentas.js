class Producto {
    static contadorProductos = 0
    constructor(nombre, precio) {
        this._idProducto = Producto.contadorProductos++
        this._nombre = nombre
        this._precio = precio
    }

    get idProducto() {
        return this._idProducto
    }

    get nombre() {
        return this._nombre
    }

    set nombre(nombre) {
        this._nombre = this.nombre
    }

    get precio() {
        return this._precio
    }

    set precio(precio) {
        this._precio = precio
    }

    toString() {
        return `Nombre: ${this._nombre}
                Precio: $${this._precio}`
    }
}

class Orden {
    static contadorOrdenes = 0
    static get MAX_PRODUCTOS() {
        return 5
    }
    constructor() {
        this._idOrden = Orden.contadorOrdenes++
        this._productos = []
        this._contadorProductosAgregados = 0

    }

    agregarProducto(producto) {
        if (this._productos.length == Orden.MAX_PRODUCTOS) {
            console.log('Alcanzaste el límite máximo')
        } else {
            this._productos[this._contadorProductosAgregados++] = producto
        }
    }

    calcularTotal() {
        let res = 0
        for (let producto of this._productos) {
            res += producto.precio
        }
        return res
    }

    toString() {
        let res = `ID Orden: ${this._idOrden}\n`
        for (let producto of this._productos) {
            res += producto.toString() + `\n`
        }
        res += `Total Productos: ${this._contadorProductosAgregados}
                Total: $${this.calcularTotal()}`
        return res
    }
}

let producto1 = new Producto('Pantalon', 200)
let producto2 = new Producto('Camisa', 350)

let orden1 = new Orden()
orden1.agregarProducto(producto1)
orden1.agregarProducto(producto1)
orden1.agregarProducto(producto1)
orden1.agregarProducto(producto2)
orden1.agregarProducto(producto2)
orden1.agregarProducto(producto2)

console.log(orden1.toString())