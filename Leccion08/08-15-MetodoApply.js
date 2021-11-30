let persona1 = {
    nombre: 'Julio',
    apellido: 'Romero',
    nombreCompleto: function (titulo, telefono) {
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + telefono;
    }
}



let persona2 = {
    nombre: 'Diana',
    apellido: 'Letepichia',
    direccion: function (calle, numero, colonia) {
        return this.nombre + ' ' + this.apellido + ' ' + calle + ' ' + numero + ' ' + colonia;
    }
}

//Uso de apply para usar el metodo persona1.nombreCompleto() con los datos del pesona2
//apply es necesario hacer una variable con arreglo o ingresar el arreglo directamente

console.log(persona1.nombreCompleto('Ingeniero', '5556770604'));

let arreglo = ['licenciada', '5560799650']
console.log(persona1.nombreCompleto.apply(persona2, arreglo));

console.log(persona2.direccion('22', '69', 'Maravillas'))

