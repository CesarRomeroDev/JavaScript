class DispositivosEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada() {
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrad) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
    toString() {
        return `Entrada: ${this._tipoEntrada}, marca: ${this._marca}`;
    }
}

class Raton extends DispositivosEntrada {

    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton() {
        return this._idRaton;
    }
    toString() {
        return ` idRaton: ${this._idRaton}, Raton: ${super.toString()}`;
    }
}

class Teclado extends DispositivosEntrada {

    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado() {
        return this._idTeclado;
    }
    toString() {
        return `idTeclado: ${this._idTeclado}, Teclado: ${super.toString()}`;
    }
}

class Monitor {

    static contadorMonitores = 0;

    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor() {
        return this._idMonitor;
    }
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
    get tamaño() {
        return this._tamaño;
    }
    set tamaño(tamaño) {
        this._tamaño = tamaño;
    }
    toString() {
        return `idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}`
    }
}

class Computadora {

    static contadorComputadoras = 0;

    constructor(nombre, Monitor, Teclado, Raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = Monitor;
        this._teclado = Teclado;
        this._raton = Raton;
    }
    get idComputadora() {
        return this._idComputadora;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get monitor() {
        return this._monitor;
    }
    set monitor(monitor) {
        this._monitor = monitor;
    }
    get teclado() {
        return this._teclado;
    }
    set monitor(teclado) {
        this._teclado = teclado;
    }
    get raton() {
        return this.raton;
    }
    set raton1(raton) {
        this._raton = raton;
    }
    toString() {
        return `idComputadora: ${this._idComputadora}, Nombre: ${this._nombre}\n${this._monitor}\n${this._teclado}\n${this._raton} `
    }
}

class Orden {

    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden() {
        return this.idOrden;
    }
    agregarComputadoras(computadoras) {
        this._computadoras.push(computadoras);
    }
    mostrarOrden() {
        let computadorasOrden = '';
        for (let computadora of this._computadoras) {
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, computadoras: ${computadorasOrden}`)
    }

}

/******DISPOSITIVOS ENTRADA******************************* */
objeto1 = new DispositivosEntrada('USB', 'Asus');
console.log(objeto1.toString());
objeto2 = new DispositivosEntrada('HDMI', 'DELL');
console.log(objeto2.toString());

/**RATON************************************************* */
raton1 = new Raton('USB', 'Logitech');
console.log(raton1.toString());
raton2 = new Raton('USB', 'Huawei');
console.log(raton2.toString());

/**Teclado********************************************** */
teclado1 = new Teclado('USB', 'SONY');
console.log(teclado1.toString());
teclado2 = new Teclado('USB', 'HP');
console.log(teclado2.toString());


/**Monitor********************************************** */
monitor1 = new Monitor('HUAWEI', '22 Pulgadas');
console.log(monitor1.toString());
monitor2 = new Monitor('SAMSUNG', '40 Pulgadas');
console.log(monitor2.toString());

computadora1 = new Computadora('DELL', monitor1, teclado2, raton1);
/****
 * tambien podemos usar templateString en vez de toString.
 */
console.log(`${computadora1}`);


let orden1 = new Orden();
orden1.agregarComputadoras(computadora1);
oden1.mostrarOrden();