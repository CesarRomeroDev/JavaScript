//declaracion de Funcion tipo expresion
// argumentos es cuando declaramos nuestra funcion (a, b) 
let sumar = function(a = 4, b = 5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
    return a + b + arguments[2] + arguments[3];
};


let resultado = sumar(3, 6, 7, 4); //(1, 2)parametros
console.log( resultado );