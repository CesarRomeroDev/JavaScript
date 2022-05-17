
//nos permite agregar funcionalidad si modificar nuestra clase.

function Saludar(target: Function): void{
    target.prototype.saludos = function():void{
        console.log('hola desde decorador')
    }
}

@Saludar

class Hola{
    constructor(){}
}


let hola1 = new Hola();
hola1.saludos();