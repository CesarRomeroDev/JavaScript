/**
 * ¿Qué son los Modulos?
 *  Los mudulos son subpartes que se pueden dividir 
 */

const Math = {};        //creamos objeto bacio, para poder agregar nuestras funciones.

function add(x1, x2) {
    return x1 + x2;
}

function substract(x1, x2) {
    return x1 - x2;
}

function multiply(x1, x2) {
    return x1 * x2;
}

function divide(x1, x2) {
    if (x2 == 0) {
        console.log('no se puede dividir por "0"');
    } else {
        return x1 / x2;
    }
}

/**
 * creamos nuestra plantilla de objetos
 * agregamos las propiedades de nuestro objeto.
 */
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

/**
 * exports:
 * exportamos las funciones con un nombre = a el nombre de la función.
 * estamos usando una propiedad de un objeto, para despues utilizarla en index.js
 * propiedad.add = objeto funcion add
 */
// exports.add = add;
// exports.substract = substract;
// exports.multiply = multiply;
// exports.divide = divide;

/**
 * exportamos nuestro objeto Math con todas nuestras propiedades.
 * es otra forma de hacerlo.
 * el modulo nos permite exportar objetos, funcione, variables
 */
module.exports = Math;