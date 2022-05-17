class Persona{
    private nombre: string;

    constructor(nombre: string){
        this.nombre = nombre
    }

    //para poder acceder a nuestra variable privada
    getNombre():string{
        return this.nombre;
    }

    static metodoEstatico(): number{
        return 10;
    }

}

let persona1 = new Persona('Julio');
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());