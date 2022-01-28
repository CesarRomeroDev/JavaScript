'use strict'  //manejo de codigo extricto , esto nos sirve para que mande error de variables que no han sido declaradas

/**
 * Manejo de errores en JavaScript y como podemos recuperarnos de los errores
 */

try {
    //x = 10; //el uso de una variable que no ha sido declarada
    /**
     * que pasa si, si declaramos la variable?? entonces el bloque try no esta mandando ninguna excepcion 
     * y el bloque catch no se ejecuta por que no hay error. el bloque finally se sigue ejecutando
     */
    let x = 10;
}
catch (error) {  //captura el error, si se arroja un error lo vamos a recibir como parametro
    console.log(error);  //imprimimos el error
}
finally {  //Este loque de codigo siempre se va a ejecutar independientemente del erro o no error de try 
    console.log('termina la revision de errores')
}
/**
 * el proggrama continua por que nos recuperamos del error
 * y programa no termina de una manera adbruta
 */
console.log('continuamos');


