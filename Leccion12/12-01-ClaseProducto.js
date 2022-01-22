class Producto {

    static contadorProducto = 0;

    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto() {
        return this._idProducto;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get precio() {
        return this._precio;
    }
    set precio(precio) {
        this._precio = precio;
    }
    toString() {
        return ` id Producto: ${this._idProducto} nombre: ${this._nombre}, precio: $${this._precio} `
    }
}

class Orden {  //no existe erencia entre producto ni orden solo de agregacion.

    static contadorOrden = 0;

    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrdenes = ++Orden.contadorOrden;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }
    get idOrdenes() {
        return this._idOrdenes;
    }
    agregarProducto(producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto;
        }
        else {
            console.log('No se pueden agregar mas productos');
        }
    }
    calcularTotal() {
        let totalVenta = 0;
        for (let producto of this._productos) {  //iteramos el arreglo this._productos
            totalVenta += producto.precio;  //totalVenta = totalVenta + producto.precio
        }
        return totalVenta;
    }
    mostrarOrden() {
        let productoOrden = '';
        for (let producto of this._productos) {
            productoOrden += '\n [' + producto.toString() + ']';
        }
        console.log(`Orden: ${this._idOrdenes} Total: $${this.calcularTotal()}, Productos: ${productoOrden}`)
    }
}


let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('Camisa', 100);
console.log(producto1.toString());
console.log(producto2.toString());

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();