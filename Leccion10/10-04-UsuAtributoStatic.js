/**
 * Tambien podemos declarar atributos directamente a nuestra clase 
 * sin necesidad de declararlo al constructor
 */
/**
 * Clase Padre
 */
class Persona { //clase

    static contadorPersona = 0;      //variable static (atributo que pertenese a la clase y no a un objeto)

    constructor(nombre, apellido) {  //constructor inicializa nuestros atributos
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersona;   //postIncremento++   ++preIncremento 
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
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    toString() { //sobreescribiendo el metodo de la case Padre (Object)
        /**
         * se aplica polimorfismo(multiples formas en tiempo de ejecucion)
         * el metodo que se ejecuta depende si es una referencia de tipo padre
         * o de tipo hijo
         */
        return this.nombreCompleto();
    }
    static saludar() {  //metodo static que se asocian a nuestra clase 
        console.log('Saludos desde metodo Static clase padre');
    }
    static saludar2(persona) {
        console.log(persona.nombre, persona.apellido);
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
    nombreCompleto() {
        return super.nombreCompleto() + ',' + this._departamento;
    }
}

let persona1 = new Persona('Julio', 'Romero');
console.log(persona1.toString());

let empleado1 = new Empleado('Diana', 'Letepichia', 'Recursos Humanos');
console.log(empleado1.toString());

console.log(Persona.contadorPersona);

let persona2 = new Persona('Fernando', 'Ramirez');
console.log(persona2.toString());

console.log(Persona.contadorPersona);