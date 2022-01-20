/**
 * Cuando trabajamos con clases no se aplica el concepto de Hoisting, esto quiero decir que primero tenemos que 
 * definir nuestra clase para poderla utilizar.
 * en cambio cuando trabajamos con funciones, primero podemos llamar la funcion y posterior definir esta funcion, ya que 
 * se aplica el concepto de Hoisting cuando trabajamso con funciones y tambien cuando trabajamos con variables cuando las declaramos como
 * tipo var  
 */

/**
 * No se puede crear objetos antes de declarar la clase
 * No se aplica el concepto de Hoisting
 */

//let persona2 = new Persona( 'Karla', 'Juarez' ); //no podemos declara objetos de clases que no has sido definidas

class Persona { //clase
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre() {               //llamamos al atributo nombre
        return this._nombre
    }

    set nombre(nombre) {       //Modificamos el atributo nombre
        this._nombre = nombre
    }
}

let persona1 = new Persona('Julio', 'Romero'); //objeto
persona1.nombre = 'Juan Carlos'   //SET nombre
console.log(persona1.nombre); //GET nombre

let persona3 = new Persona('Karla', 'Juaresz');
console.log(persona3.nombre)
