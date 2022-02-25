function imprimir(mensaje) {     //vamos a pasar esta funcion como argumento a la funcion sumar
    console.log(mensaje);
}

function sumar(op1, opt2, imprimir) {  //llamar a una funcion dentro de otra funcion, mediante un argumento
    let res = op1 + opt2;
    imprimir(`Resultado: ${res}`);
}

sumar(10, 5, imprimir);