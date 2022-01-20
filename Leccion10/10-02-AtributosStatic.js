/**
 * Clase Padre
 */
class Persona { //clase

    static contadorObjetosPersona = 0;      //variable static (atributo que pertenese a la clase y no a un objeto)

    constructor(nombre, apellido) {  //constructor inicializa nuestros atributos
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log('se incrementa contador: ' + Persona.contadorObjetosPersona);
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

persona1 = new Persona('Julio', 'Romero');
console.log(persona1);
console.log(persona1.nombreCompleto());
console.log(persona1.toString());

empleado1 = new Empleado('Diana', 'Letepichia', 'RH');
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

//persona1.saludar();  no es posible llamar un metodo Static desde un objeto
Persona.saludar(); //solo podemos llamar los metodos static desde las clases, ya que el metodo static se asocia
//con una clase
Persona.saludar2(persona1);

Empleado.saludar(); //los metodos static tambien se pueden eredar a las clases hijas
Empleado.saludar2(empleado1);

console.log(persona1.contadorObjetosPersona); //asi no se accede a unuestro atributo variable static
console.log(Persona.contadorObjetosPersona); //se accede con el nombre de la clase padre

console.log(Empleado.contadorObjetosPersona);  //tambien podemos acceder desde la clase hija eredan las variables estaticas de clase padre 