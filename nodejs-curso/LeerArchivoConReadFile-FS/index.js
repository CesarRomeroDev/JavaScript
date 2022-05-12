const fs = require('fs');

/**
 * readFile:
 * Nos permite leer texto de un archivo especifico.
 */
fs.readFile('./texto.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString()); //Leemos los datos con toString() ya que sin el toString nos manda puros numeros
});
