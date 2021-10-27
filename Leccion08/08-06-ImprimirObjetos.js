let persona = {
    nombre: 'Julio',
    apellido: 'Romero',
    email: 'cesar_romero@hotmail.com',
    edad: 32,
    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
    }
}
//concatenar cada valor de cada propiedad

console.log(persona.nombre + ', ' + persona.apellido);

//for in

for (nombrePropiedad in persona) {
    console.log(persona[nombrePropiedad]);
}

//imprime nuestro objeto en arreglo
let personaAray = Object.values(persona);
console.log(personaAray);

//metodo JSON nuestro objeto a una cadena
let personaString = JSON.stringify(persona);
console.log(personaString);