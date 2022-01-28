'use strict'

/**
 * throw para mandar mensaje
 * isNaN para comparar si es numero
 */

let resultado = "";

try {
    //x = 10;
    if (isNaN(resultado)) throw 'No es un numero, es un string!!';
    else if (resultado === '') throw 'Es cadena vacia';
    else if (resultado >= 0) throw 'Valor Positivo';
    else if (resultado < 0) throw 'Valor Negativo';
} catch (error) {
    console.log(error);
    //console.log(error.name); //para saber los posibles errores
    //console.log(error.message); //para saber los posibles errores
} finally {
    console.log('termina revision de errores');
}