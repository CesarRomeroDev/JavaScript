/**
 * esto es un proceso asincrono ya que primero ejecuta un proceso como :
 * 1: inicio promesa
 * 2: fin promesas
 * 3: saludos con promesa y timeout
 * Esto quiere decir que el inicio de la promesa y el fin de la promesa se ejcutan primero con el console.log
 * lo cual sigue su ciclo de ejecucion y cuando pasan los 5 segundo se ejecuta el setTimeout
 * es muy util trabajar con promesas YA QUE TENEMOS CODIGO ASINCRONO .
 */
let promesa = new Promise((resolver) => {
    console.log('inicio Promesa');
    setTimeout(() => resolver('saludos con promesa y timeout'), 5000);
    console.log('fin promesa');
});

promesa.then(valor => console.log(valor));