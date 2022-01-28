const miFuncionFlecha = () => console.log('es solo una linea de codigo');  //no es necesario abrir el curpo de nuestra funcion ya que solo es una linea de codigo

miFuncionFlecha();

const miFuncionFlechaReturn = () => {
    return 'Hola, es una funcion return'
}

console.log(miFuncionFlechaReturn());

/**
 * tambien podemos somplificar nuestra funcion flecha sin poner return
 */

const miFuncionFlechaSinReturn = () => 'Hola, es una funcion flecha sin return simplificada';
console.log(miFuncionFlechaSinReturn());

/**
 * ahora vamos a imprimir un objeto con funcion flecha
 */

const miFuncionObjeto = () => ({ nombre: 'Julio', apellido: 'Romero' });  //se usa parentisis para indicar que es un objeto y no podamos confundirnos con {}
console.log(miFuncionObjeto());

/**
 * Funcion flecha con parametros
 */

const miFuncionParametros = (mensaje) => console.log(mensaje);
miFuncionParametros('soy una funcion con parametros');

/**
 * Funcion flecha con varios parametros
 */
const miFuncionVariosParametros = (nm1, nme2) => `Suma: ${nm1}${nme2}`;
console.log(miFuncionVariosParametros(10, 4));