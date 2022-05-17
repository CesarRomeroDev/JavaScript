"use strict";
//Nuestras valiables siempre van a ir con tipado .
var saludo = 'hola desde type script';
//any: nos ayuda a creaar variables de cualquier tipo de dato
//en este caso debemos de tener cuidado al tener varias variables definidas asi.
var cualquierTipo;
cualquierTipo = 'cadena';
cualquierTipo = 10;
// Las variables constantes no se pueden modificar una vez que se hayan inicializado.
var PT_NUMERO = 3.14;
function saludar() {
    console.log(saludo);
    console.log(PT_NUMERO);
}
saludar();
