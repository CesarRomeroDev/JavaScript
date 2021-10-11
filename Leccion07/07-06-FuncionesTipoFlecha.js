//declaracion de Funcion tipo expresion

let sumar = function(a, b){return a + b};

let resultado = sumar(1, 2);
console.log( resultado );

//funcion flecha , equivalente a la funcion de arriba: ya no es necesario poner function , las llaves y el return 
const sumarFuncioTipoFlecha = (a, b) => a + b;

resultado = sumarFuncioTipoFlecha(3, 5);

console.log( resultado );