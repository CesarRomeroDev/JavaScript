//LA PRINCIPAL TAREA DE NODEJS ES CREAR SERVIDORES
/**
 * ¿Qué es un Servidor?
 * HTTP:
 * Es un protocolo que nos permite hacer peticiones a un servidor y 
 * recibir respuestas del servidor.
 * 
 */
const http = require('http');
var colors = require('colors');  // module de npm para colores en texto

/**
 * vamos a crear un servidor lo cuan va a tener una funcion y los paramentros van a 
 * REQUERIR(req) informacion y vamos a obtener una RESPUESTA(resp).
 * lo cual nuestro servidor va a responder (resp.write) Hola Mundo desde NodeJS
 * y vamos a necesitar un puerto 3000
 */

const handleServer = function (req, resp) {
    resp.writeHead(200, { 'Content-Type': 'text/html' });  //es una cabecera, le voy a dar mas informacion al servidor 200 es correcta la petición con un contenido html
    resp.write('<h1>Hola, Es una peticion http</h1>');
    resp.end('okay'); //terminamos la respuesta
}

const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log(colors.green('server on port 3000 :)'));
});