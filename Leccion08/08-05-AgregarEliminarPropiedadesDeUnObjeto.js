let persona = {
    nombre: 'Julio',
    apellido: 'Romero',
    email: 'cesar_romero@hotmail.com',
    edad: 32,
    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
    }
}
// Para agregar dinamicamente mas propiedades a nuestros objetos.
persona.tel = '55809456';
persona.tel = '44596969';
console.log(persona);
// para eleimnar una propiedad
delete persona.tel;
console.log(persona);