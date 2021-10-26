let persona = {
    nombre: 'Julio',
    apellido: 'Romero',
    email: 'cesar_romero@hotmail.com',
    edad: 32,
    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);

//tambine podemos acceder a un objeto en forma de un arreglo 
console.log(persona['apellido']);

// para recorrer cada una de nuestras popiedades tambien utilizamos "for in"

for (nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}