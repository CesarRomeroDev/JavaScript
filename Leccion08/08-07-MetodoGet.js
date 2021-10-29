// let persona = {
//     nombre: 'Julio',
//     apellido: 'Romero',
//     email: 'cesar_romero@hotmail.com',
//     edad: 32,
//     nombreCompleto: function () {
//         return this.nombre + ' ' + this.apellido;
//     }
// }
//Imprime nuestra funcion 
// console.log(persona.nombreCompleto());

/**
 * exite otra forma para llamar a la función utilizando el conceptode GET.
 * GET significa OBTENER nos permite acceder a los valores de nuestras propiedades.
 */

let persona = {
    nombre: 'Julio',
    apellido: 'Romero',
    email: 'cesar_romero@hotmail.com',
    edad: 32,
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    }
}
console.log(persona.nombreCompleto);
