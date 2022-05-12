/**
 * Este modulo nos sirve para saber caracteristicas de nuestro sistema operativo
 */
const os = require('os');  //MODULO DE NODEJS

console.log(os.platform());
console.log(os.release());
console.log('free mem:', os.freemem(), 'bytes');
console.log('total mem:', os.totalmem(), 'bytes');
console.log('Sistema Operativo: ', os.version());