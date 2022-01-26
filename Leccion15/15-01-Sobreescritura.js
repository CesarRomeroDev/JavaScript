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

let empleado1 = new Empleado('Pepe', 13424);
console.log(empleado1.obtenerDetalles())

let gerente1 = new Gerente('Julio', 23129, 'Ingeniría');
console.log(gerente1.obtenerDetalles());