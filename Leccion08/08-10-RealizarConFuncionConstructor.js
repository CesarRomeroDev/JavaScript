function Persona(nombre, apellido, email) {  //se recomineda que los metodos que van hacer contructores de objetos inicien con letra mayuscula
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Julio', 'Romero', 'cesar_rommero.dev@outlook.com');
console.log(padre.nombreCompleto());
for (i in padre) {
    console.log(padre[i])

}

let madre = new Persona('Diana', 'Letepichia', 'dina@hotmail.com')
console.log(madre.nombreCompleto());