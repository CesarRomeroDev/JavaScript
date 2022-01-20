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
}

/**
 * Clase Hija
 */

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

let persona1 = new Persona('Julio', 'Romero');
console.log(persona1);

let empleado1 = new Empleado('Maria', 'Fernandez', 'Sistemas');
console.log(empleado1);

let empleado2 = new Empleado('Jose', 'Manuel', 'Seguridad')
console.log(empleado2);

/*********************************************************************************************
 ********************************************************************************************
  *************         ***    **   ***   *********   ***         **************************
    **************   ******    **   ***   *********   ***  *****  *************************
     *************   ******    **   ***   *********   ***  *****  ***********************
      ************   ******    **   ***   *********   ***  *****  **********************
       *******       ******         ***         ***   ***         *********************
        ******************************************************************************
 */

