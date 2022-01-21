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
        Sueldo:      ${this._sueldo}
        `;
    }
}