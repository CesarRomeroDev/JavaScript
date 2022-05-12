/**
 * requiere:
 * con requiere llamamos el archivo marh para obtener las funciones.
 */
const math = require('./math');

console.log(math);  //solo para ver que es lo que esta subtrayendo.
/**
 * para poder utilizar las funciones que vienen del archivo math.js
 * primero se pone el nombre que le dimos a la constante mas el nombre de la 
 * funcion.
 */
console.log(math.add(1, 0));
console.log(math.substract(2, 1));
console.log(math.multiply(1, 0));
console.log(math.divide(1, 0));