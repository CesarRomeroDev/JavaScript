//esta funcion se hace llamar por si misma pero ya no es reutilizable ya no puede ser llmada posteriormente 
(function (a, b){
    console.log('ejecutando la funcion: ' + ( a + b ));
})(3, 4);