var nombre = 'Julio';
var apellido = 'Romero';

var apellidoCompleto = nombre + ' ' + apellido;
console.log(apellidoCompleto);

var nombreCompleto2 = 'Julio' + ' ' + 'Romero';
console.log(nombreCompleto2);


/*contexto de cadena:
Se le llama contexto de cadena por que al momneto de ejecutar el codigo dependiendo quien se encuentre al principio de izquierda a deracha,
se toma el string o numero .  si se encuenta un string se ejecuta todo en string , si hay un number al principio se ejcuta como number.
*/
var x = nombre + 2 + 4;
console.log(x);

x = nombre + (2 + 4);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);