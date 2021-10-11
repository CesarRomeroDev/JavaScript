// para saber los argumentos de una funciones (arguments.length)
function suma(a, b){
    console.log( arguments.length );
    return a + b;
}

let resultado = suma(5, 10);

console.log( resultado );

// convertir nuestra funcion a texto con .toString();
var sumaTexto = suma.toString();
console.log(sumaTexto);
