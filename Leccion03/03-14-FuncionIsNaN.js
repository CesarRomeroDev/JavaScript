//NOT A NUMBER : SIGNIFICA QUE ESTE VALOR NO ES UN NUMERO NaN
let miNumero = "18x";


let edad = Number( miNumero );
console.log( edad );

if( isNaN(edad)){
    console.log("no es un numero")
}
else{
    if( edad >= 18 ){
        console.log("puede votar");
    }
    else{
        console.log("muy joven para votar")
    }
}
///////////////////////////////////////////////////////////////////////////////
if( isNaN( edad )){
    console.log("no es un numero")
}
else{
    let votar = (edad >= 18) ? "ya puede votar" : "no puede votar"
    console.log(votar); 
}