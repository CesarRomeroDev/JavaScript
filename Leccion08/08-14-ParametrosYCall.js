let persona1 = {
    nombre: 'Julio',
    apellido: 'Romero',
    nombreCompleto: function (titulo, tel) {
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}



let persona2 = {
    nombre: 'Diana',
    apellido: 'Letepichia',
    direccion: function (calle, numero, colonia) {
        return calle + ' ' + numero + ' ' + colonia;
    }
}

console.log(persona1.nombreCompleto('Ingeniro', '5555868698'));

console.log(persona1.nombreCompleto.call(persona2, 'Licenciada', '5506054349'));

console.log(persona2.direccion('22', '69', 'maravillas'));