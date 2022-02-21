class Producto {

    static contadorProducto = 0;

    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto() {
        return this.idProducto;
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
        return `idProducto#: ${this._idProducto}, Producto: ${this._nombre}, Precio:  $${this._precio}`
    }
}

class Orden {

    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }
    get idOrden() {
        return this._idOrden;
    }
    /**
     * .length nos sirve para hacer un conteo de un array 
     * .push nos sirve para agregar elementos
     */
    agregarProducto(producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto)
        } else {
            console.log('No se Puede Agregar Mas Productos.')
        }
    }
    /**
     * estamos recorriendo los productos para hacer la suma 
     */
    calcularTotal() {
        let totalVenta = 0;
        for (let producto of this._productos) {
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden() {
        let productosOrden = ' ';
        for (let producto of this._productos) {
            productosOrden += `\n{` + producto.toString() + '}';
        }
        console.log(`Orden: ${this.idOrden}, total: $${this.calcularTotal()}, Productos ${productosOrden}`)

    }
}

let producto1 = new Producto('Pantalon', 320);
let producto2 = new Producto('Tenis', 800);
let producto3 = new Producto('Camisa', 800);
let producto4 = new Producto('cinturon', 800);
let producto5 = new Producto('zapatos', 800);
let producto6 = new Producto('chamarra', 800);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);
orden1.agregarProducto(producto5);
orden1.agregarProducto(producto6);

orden1.mostrarOrden();