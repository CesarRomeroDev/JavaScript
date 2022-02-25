
let miPromesa = new Promise((resolve, reject) => {  //el parentesis donde se encuentran nuestros parametros , indican que es un objeto
    let expresion = false;
    if (expresion)
        resolve('Resuelvio correcto');
    else
        reject('se produjo un error');
});

/**
 * primer argumento funcion flecha (valor)
 * segundo argumento funcion flecha (error)
 */
//miPromesa.then(valor => console.log(valor), error => console.log(error));
/**
 * caso catch
 */
miPromesa
    .then(valor => console.log(valor))
    .catch(error => console.log(error));
/**
 * Una vez que se ejecuta la promesa la hacemos llamar con nuestro metodo .then.
 * Lo que sucede se llama nuestra variable miPromesa.
 * como observamos estamos llmando como paramentro a nuestras funciones de tipo flecha.
 * lo cual estas funciones las vamos a utizar en caso de exito y en caso de rechazo.
 * dentro de nuestro codigo de la promesa lo que estamos haciendo,
 * es declarar nuestra expresion.
 * y en caso de verdadero hacemos llamar nuestra funcion resolver. y estamos pasando esta informcion como parametro  
 */