class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    obtenerDetalles() {
        return `Empleado: ${this.nombre} Sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    obtenerDetalles() {
        return `Gerente: ${super.obtenerDetalles()} Depto: ${this.departamento}`
    }
}

/**
 * se le llama polimorfismo cuando se puede ejecutar dos metos
 * en una sola linea , los metodos son de la clase padre y clase hija 
 * @param {recibe obtenerDetalles de clase padre y clase hija} tipo 
 */
function imprimir(tipo) {  // el tipo puede obtener los objetos como empleado1 y gerente1. tipo generica
    console.log(tipo.obtenerDetalles());
}

let empleado1 = new Empleado('Pepe', 13424);


let gerente1 = new Gerente('Julio', 23129, 'Ingeniría');

imprimir(empleado1);
imprimir(gerente1);
