let persona1 = {
    nombre: 'Julio',
    apellido: 'Romero',
    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
    }
}



let perosna2 = {
    nombre: 'Diana',
    apellido: 'Letepichia'
}

/**
 * Uso de call para usar el metodo persona1.nombreCompleto
 * con los datos persona2
 */

console.log(persona1.nombreCompleto());

console.log(persona1.nombreCompleto.call(perosna2));