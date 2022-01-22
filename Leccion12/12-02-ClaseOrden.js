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
            productoOrden = productoOrden + producto.toString() + ' ';
        }
        console.log(`Orden: ${this._idOrdenes} Total: ${this.calcularTotal()}, Productos: ${productoOrden}`)
    }
}