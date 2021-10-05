/*
Ejemplos de tipod de datos
de JavaScript.
*/
//Tipo de dato string
var nombre = "Julio";
console.log(typeof nombre);

nombre = 10.5;
console.log( typeof nombre);

//Tipo de Dto Numerico
var numero = 1000;
console.log(numero);

//Tipo de Dato objeto
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "558094748"
}
console.log(typeof objeto);

//Tipo de Dato boolean( true, false )
var bandera = false;
console.log(typeof bandera);

//Tipo de Dato function
function miFuncion(){}    // function miFuncion(Informacion que va a recibir la funcion){linas de codigo que va a tener la funcion}
console.log( typeof miFuncion);

//Tipo de Dato Symbol
var simbol = Symbol("mi simbolo");
console.log( typeof simbol);

//tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log( typeof Persona);

//Tipo de Dato undefined
var x;
console.log( typeof x);

x = undefined;
console.log( typeof x);

//null = ausencia de valor
var y = null;
console.log( typeof y);

//Tipo de Datos Arreglo
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

//Cadena vasia
var z = '';
console.log(z);
console.log(typeof z);