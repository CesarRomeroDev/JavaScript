let hora = 5;
let dia;

if( hora >= 6 && hora <= 11 ){
     dia = "Buenos Días";
}
else if( hora >=12 && hora <= 18 ){
    dia = "Buenas Tardes";
}
else if( hora >= 19 && hora <= 24){
    dia = "Bunas Noches";
}
else if( hora >= 0 && hora < 6 ){
    dia = "Durmiendo";
}
else{
    dia = "Hora Incorrecta";
}
console.log(dia)