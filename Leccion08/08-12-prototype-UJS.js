function Persona(nombre, apellido, email) {  //se recomineda que los metodos que van hacer contructores de objetos inicien con letra mayuscula
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}

Persona.prototype.tel = '5580076917'; //prototype vamos a poder modificar los atributos y los metodos asociados aun objeto 

let padre = new Persona('Julio', 'Romero', 'cesar_romero.dev@outlook.com');
console.log(padre.tel);

let madre = new Persona('Diana', 'Letepechia', 'diana@gmail.com');
madre.tel = '5959483481'
console.log(madre.tel);