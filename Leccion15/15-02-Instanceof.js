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


function determinarTipo(tipo) {
    console.log(tipo.obtenerDetalles());
    /**
     * es una instancia de tipo:
     */
    if (tipo instanceof Gerente) {
        console.log('Es un objeto de tipo HIJO');
        console.log(tipo.departamento);  //Podemos ingresar a los atributos de la clase hija
    }
    else if (tipo instanceof Empleado) {
        console.log('Es un objeto de tipo PADRE');
        console.log(tipo.departamento) //no podemos ingresar a los atributos  de la clase hija
    }
    // else if(tipo instanceof Object){
    //     console.log('Es un tipo Object')
    // }
}

let empleado1 = new Empleado('Pepe', 13424);


let gerente1 = new Gerente('Julio', 23129, 'Ingeniría');

determinarTipo(empleado1);
determinarTipo(gerente1);