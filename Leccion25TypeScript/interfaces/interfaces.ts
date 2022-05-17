interface Usuario{
    nombre: string;
    passoword: string;
    confirmarPassword?: string;     // '?' tipo opcional.
}

//crear un objeto :
let usuario1:Usuario = { 
    nombre:'Julio', 
    passoword: '123456'
}

console.log(usuario1);
console.log(usuario1.nombre);


//tambien podemos crear metodos con interfaces:

interface Abordar{
    abordarTransporte(): void;
}

let avion: Abordar = {
    abordarTransporte: function(){
        console.log('abordando');
        
    }
}

avion.abordarTransporte();