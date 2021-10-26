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
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.nombreCompleto());
console.log(persona);

// crear un nuevo objeto con la palabra reservada new (otra forma de crear objetos)(no es la forma mas comun)

let persona2 = new Object();
persona2.nombre = 'Carlos';   //Propiedades del objeto 
persona2.direccion = 'Sturno 15'; //Propiedades del objeto 
persona2.tel = '5580076917'; //Propiedades del objeto 

console.log(persona2.tel);