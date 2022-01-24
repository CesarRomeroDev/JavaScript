class DispositivoEntrada {                      //Clase padre DispositivoEntrada
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada() {
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada {         //Clase hija Raton de DispositivoEntrada
    static contadorRatones = 0
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRatones = ++Raton.contadorRatones;
    }
    get idRaton() {
        return this._idRaton;
    }
    toString() {
        return `Raton: [idRaton: ${this._idRatones}, Dispositivo: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }
}

class Teclado extends DispositivoEntrada {       //Clase hija Teclado de DispositivoEntrada
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado() {
        return this._idTeclado;
    }
    toString() {
        return `Teclado: [idTeclado: ${this._idTeclado}, Dispositivo: ${this._tipoEntrada}, Marca: ${this._marca}]`;
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
        return `Monitor: [idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}]`;
    }
}

class Computadora {
    static contadorComputadoras = 0;
    constructor(nombre, Monitor, Teclado, Raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = Monitor;    //no son de herencia, son de agregación.
        this._teclado = Teclado;    //no son de herencia, son de agregación.
        this._raton = Raton;        //no son de herencia, son de agregación.
    }
    toString() {
        return `Computadora: ${this._idComputadora}, Nombre: ${this._nombre}, \n ${this._monitor}, \n ${this._teclado}, \n ${this._raton}`
    }
}

class Orden {
    static contadorOrdenes = 0;
    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden() {
        return this._idOrden;
    }
    agregarComputadoras(computadora) {
        this._computadoras.push(computadora);
    }
    mostrarOrden() {
        let computadorasOrden = '';
        for (let computadora of this._computadoras) {
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`)
    }
}

let monitor1 = new Monitor('Sony', '20 Pulgadas');
console.log(monitor1.toString());
let monitor2 = new Monitor('Dell', '50 Pulgadas');
console.log(monitor2.toString());


let teclado1 = new Teclado('Blutooth', 'Logitech');
console.log(teclado1.toString());
let teclado2 = new Teclado('Teclado Gamer', 'HP');
console.log(teclado2.toString());


let raton1 = new Raton('USB', 'logitech');
console.log(raton1.toString());
let raton2 = new Raton('Blutooth', 'Dell');
console.log(raton2.toString());


// let dispositivo1 = new DispositivoEntrada('USB', 'Logitech')
// console.log(dispositivo1);

let computadoora1 = new Computadora('hp', monitor1, teclado1, raton1);
console.log(`${computadoora1}`); //tambien podemos llamar a toString con templateString `${computadoora1}`
let computadora2 = new Computadora('Dell', monitor2, teclado2, raton2);
console.log(`${computadora2}`);

let orden1 = new Orden();
orden1.agregarComputadoras(computadoora1);
orden1.agregarComputadoras(computadora2);
orden1.mostrarOrden();
let orden2 = new Orden();
orden2.agregarComputadoras(computadoora1);
orden2.agregarComputadoras(computadora2)
orden2.mostrarOrden();