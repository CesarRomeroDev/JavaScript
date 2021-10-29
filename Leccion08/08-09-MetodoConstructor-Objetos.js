//para llamamar una funcion contructor, vamos a utilizar la palabra reservada NEW para hacer un espacio en memora para llamar al objeto.
//constructor de objetos de tipo persona.
function Persona(nombre, apellido, email) {  //se recomineda que los metodos que van hacer contructores de objetos inicien con letra mayuscula
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona("Julio", "Romero", "cesar_romero.dev@outlook.com");
console.log(padre);

let madre = new Persona("Diana", "Letepichia", "idana@hotmail.com");
console.log(madre);

let json = JSON.stringify(padre);
console.log(json);

padre.nombre = "Carlos"; //cambio de nombre 

console.log(padre);