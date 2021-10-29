let persona = {
    nombre: 'Julio',
    apellido: 'Romero',
    email: 'cesar_romero@hotmail.com',
    edad: 32,
    idioma: 'es',       //cuando se trarta de idiomas, siempre se trabaja con mayusculas
    get lang() {
        return this.idioma.toUpperCase();
    },
    //Metodo SET lo vamos a utilizar para modificar los valores de nuestros atributos de nuestro objeto.
    set lang(lang) {  //parametro lang
        this.idioma = lang.toUpperCase()  //toUpperCase : para hacer en mayusculas
    },
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    }
}
console.log(persona.nombreCompleto);
console.log(persona.lang);

persona.lang = 'en';

console.log(persona.lang);
console.log(persona.idioma);