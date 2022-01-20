/**
 * se recomienda que las clases comience con letra mayusculas para diferenciarlas
 */
class Persona { //clase
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

let persona1 = new Persona('Julio', 'Romero'); //objeto
console.log(persona1);

let persona2 = new Persona('Carlos', 'Lara'); //objeto
console.log(persona2);