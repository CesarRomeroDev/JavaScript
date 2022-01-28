function miFuncion() {
    console.log('hola, es una function');
}

miFuncion();


/******
 * Las funcines anonimas no tienen nombre y
 * la cual se puede asignar a una variable
 */

let miFuncionAnonima = function () {    //Funcion que se puede asignar a una varible.
    console.log('hola, es una función anonima');
}

miFuncionAnonima();

/**
 * ahora vamos a crear nuestra funcion flecha
 * poner la referencia const en funciones y de buena practica ya que las funciones no pueden cambiar
 */

const miFuncionFlecha = () => {
    console.log('hola, es una función flecha');
}

miFuncionFlecha();