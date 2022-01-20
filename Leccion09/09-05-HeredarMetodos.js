/**
 * Clase Padre
 */
class Persona { //clase
    constructor(nombre, apellido) {  //constructor inicializa nuestros atributos
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre() {               //llamamos al atributo nombre
        return this._nombre;
    }

    set nombre(nombre) {       //Modificamos el atributo nombre
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }
    nombreCompleto() {         //metodo no es necesario agregar function
        return this._nombre + ' ' + this._apellido;
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {  //inicializamos atributos de clase padre e hija
        super(nombre, apellido); //llamar al constructor de la clase Padre
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }
}

persona1 = new Persona('Julio', 'Romero');
console.log(persona1);
console.log(persona1.nombreCompleto());

empleado1 = new Empleado('Diana', 'Letepichia', 'RH');
console.log(empleado1);
console.log(empleado1.nombreCompleto());