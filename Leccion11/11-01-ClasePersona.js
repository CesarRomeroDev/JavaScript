class Persona {

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersonas;
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
        return `
        Persona: ${this.idPersona} 
        Nombre: ${this._nombre} 
        Apellido: ${this._apellido} 
        Edad: ${this._edad}
        `;
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
        return this._sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    toString() {
        return ` 
        id Empleado: ${this._idEmpleado} 
        ${super.toString()} 
        Sueldo: ${this._sueldo}`;
    }
}

class Cliente extends Persona {

    static contadorCliente = 0;

    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorCliente;
        this._fechaRegistro = new Date();
    }
    get idCliente() {
        return this._idCliente;
    }
    get fechaRegistro() {
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }
    toString() {
        return ` 
        id Cliente: ${this._idCliente} 
        ${super.toString()} 
        Fecha de Registro: ${this._fechaRegistro}`;
    }
}


let persona1 = new Persona('Julio', 'Romero', 32);
console.log(persona1.toString());
let persona2 = new Persona('Jorge', 'Ramos', 18);
console.log(persona2.toString());

let empleado1 = new Empleado('Diana', 'Letepichia', 32, 125, 000);
console.log(empleado1.toString());
let empleado2 = new Empleado('Jose', 'Fernandez', 40, 123, 000);
console.log(empleado2.toString())

let cliente1 = new Cliente('Pepe', 'Perez', 34,);
console.log(cliente1.toString());
let cliente2 = new Cliente('Eduardo', 'Nantel', 22);
console.log(cliente2.toString());