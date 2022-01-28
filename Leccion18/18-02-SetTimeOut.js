/***
 * procesos asincronos con usu de setTimeout
 */

function miFuncionCallback() {
    console.log('Saludo asincrono 1');
}

setTimeout(miFuncionCallback, 5000); //despues de 5 segundos 

setTimeout(function () { console.log('Saludo asincrono 2') }, 9000);

setTimeout(() => console.log('saludo asincrono 3'), 11000);