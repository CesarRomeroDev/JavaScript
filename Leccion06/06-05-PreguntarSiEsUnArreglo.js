const autos = ['BMW', 'Mercedes Benz', 'Volvo'];

autos[autos.length] = 'Cadillac';

autos[5] = 'Porche';

console.log(autos);

for(let i = 0; i < autos.length; i++){
    console.log( i + ' : ' + autos[i] );
}

//para saber si es un arreglo 

console.log(typeof autos);
console.log( Array.isArray(autos) );

//otra forma de preguntar si estamos trbajando con arreglos

console.log(autos instanceof Array);