"use strict";
var Persona = /** @class */ (function () {
    function Persona(nombre) {
        this.nombre = nombre;
    }
    //para poder acceder a nuestra variable privada
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.metodoEstatico = function () {
        return 10;
    };
    return Persona;
}());
var persona1 = new Persona('Julio');
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());
