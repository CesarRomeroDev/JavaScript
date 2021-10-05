let miNumero = "20";

//console.log( typeof miNumero );

let edad = Number( miNumero );
console.log(typeof edad )

if( edad >= 18 ){
    console.log("puede votar");
}
else{
    console.log("muy joven para votar")
}

let votar = (edad >= 18) ? "ya puede votar" : "no puede votar"
console.log(votar); 