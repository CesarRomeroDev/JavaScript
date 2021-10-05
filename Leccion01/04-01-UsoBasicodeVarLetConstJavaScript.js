// La variable var ya no se recomineda utilizarla al dia de hoy 
// let para declarar una variable.
/* const para declarar una constante , es decir que una vez que le asignamos un valor a una variable ya no se puede reasignar a una
un nuevo valor a una variable asignada con const
*/
// tambien se puede asignar una variable sin utilizar var ni let ni tampoco const
//esto tambien no es una buena practica , pero es codigo valido
nombre = "Julio";

//una literal puede ser :
1
10.0
"Julio"

console.log(nombre);

//para buena practica es con let para definir nuestra variable
//tambien se puede asignar el valor de  variable despues  
let nombre2;
nombre2 = "Pepe";
console.log(nombre2);

//ya no se puede modificar el valor una vez que se le haya asignado 
const apellido = "Romero";
apellido = "Lara";
