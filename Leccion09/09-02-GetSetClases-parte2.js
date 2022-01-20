/**
 * Metodos GET y SET
 * En estos casos para acceder al nombre o modificarlo podemos agregar un metodo GET para
 * poeder leer la informacion de este atributo o
 * podemos agregar un metodo SET para modificar el valor de ese atributo
 * Nuestro metodo GET no se puede llamar igual a nuetra propiedad, por eso se acostumbra que en la propiedades se 
 * utilece un guion baj "_nombre" antes del nombre de la propiedad ya que con esto vamos a poder crear el GET y SET respectivos para 
 * nuestras propiedades.
 */
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
/**
 * *********************************************************************************
 * *********************************************************************************
 */
class Carro {
    constructor(nombreCar, modelo) {
        this._nombreCar = nombreCar;
        this._modelo = modelo;
    }

    get nombreCar() {
        return this._nombreCar
    }

    set nombreCar(nombreCar) {
        this._nombreCar = nombreCar;
    }
}

let carro1 = new Carro('Ferrari', 'MC20343');
carro1.nombreCar = 'Nissan'
console.log(carro1.nombreCar)