class Persona {

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersonas
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersona() {
        return this._idPersona;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    toString() {
        return `id Perosona: ${this._idPersona}, nombre: ${this._nombre}, apellido: ${this._apellido}, edad: ${this._edad}`;
    }
}

class Empleado extends Persona {

    static contadorEmpleado = 0;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }
    get idEmpleado() {
        return this._idEmpleado;
    }
    get sueldo() {
        return this.sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    toString() {
        return ` ${super.toString()}, idEmpleado: ${this._idEmpleado}, sueldo ${this._sueldo}`;
    }
}

class Cliente extends Persona {

    static contadorClientes = 0;

    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = new Date();
    }
    get idCliente() {
        return this._idCliente;
    }
    get fechaRegistro() {
        return this.fechaRegistro;
    }
    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }
    toString() {
        return `${super.toString()}, idClient: ${this._idCliente}, fecha: ${this._fechaRegistro}`;
    }

}


let persona1 = new Persona('Julio', 'Romero', 32);
console.log(persona1.toString());
let persona2 = new Persona('Armando', 'Ramirez', 25);
console.log(persona2.toString());

let empleado1 = new Empleado('Diana', 'Letepichia', 32, 125000);
console.log(empleado1.toString());
let empleado2 = new Empleado('Jose', 'Manuel', 32, 5000);
console.log(empleado2.toString());

let cliente1 = new Cliente('Pepe', 'Perez', 34);
console.log(cliente1.toString());