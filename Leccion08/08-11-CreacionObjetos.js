function Persona(nombre, apellido, email) {  //se recomineda que los metodos que van hacer contructores de objetos inicien con letra mayuscula
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Julio', 'Romero', 'cesar_rommero.dev@outlook.com');
console.log(padre.nombreCompleto());

let madre = new Persona('Diana', 'Letepichia', 'dina@hotmail.com')
console.log(madre.nombreCompleto());

let miObjeto = new Object(); //opcion mas formal para hacer un objeto
let miObjeto2 = {};  //opcion mas breve para hacer un objeto es lo mas comun

let miCadena1 = new String('hola');  //clase de tipo string funcion contructor(opcion mas formal para hacer una cadena de string)
let miCadena2 = 'hola'; //cadena de string lo recomendable es usar esta sintaxis 

let miNumero = new Number(1);
let miNumero2 = 2;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFunccion = new Function();
let miFunccion2 = function () { };