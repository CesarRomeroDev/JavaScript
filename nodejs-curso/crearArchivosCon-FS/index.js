/**
 * este modulo nos ayuda a trabajar con los archivos del sistema operativo
 * es muy importante ya que al estar tabajando con servidores o programas , vamos a 
 * requerir archvos del sistema ya que nos permite interactuar con ellos.
 * poder crear archivos nuevos y leerlos.
 */
const fs = require('fs');

/**
 * Crea un archivo txt con una linea llamada 'linea uno'
 * y se inicia una funcion call back , ya que si no se crea el archvo
 * va amandar un error y se emprime en consola y si en caso 
 * contrario se crea, se manda en consola el siguiente mensaje 'Archivo Creado'.
 */
/**
 * Se llama codigo asincrono ya que no vamos a tener que esperar
 * a que se cree el archivo para poder seguir con la ejecucion de nuestro codigo.
 * el archivo se puede tardar en crearse y nuestro codigo sigue corriendo hasta llegar
 * al console para imprimir el texto.
 */
fs.writeFile('./texto.txt', 'linea uno', function (err) {
    if (err) {
        console.log(erro);
    }
    console.log('Archivo Creado');
});

console.log('ultima linea de codigo');