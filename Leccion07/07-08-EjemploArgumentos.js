let resultado = sumarTodo(5, 4, 13, 10, 9, 9);
console.log( resultado )

function sumarTodo(){  //como se ve no pasamos ningun paramentro
    let suma = 0;
    for( let i = 0; i < arguments.length; i++ ){
        suma += arguments[i];  //suma = suma + argument[i];
    }
    return suma;
}