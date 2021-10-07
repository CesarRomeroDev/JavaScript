const autos = ['BMW', 'Mercedes Benz', 'Volvo'];

for (let i = 0; i < autos.length; i++) {
    console.log( i + ' : ' +  autos[i])
}


//modificar valores , solo agregando el indice al que queremos modificar .
autos[1] = 'MercedesBenz';
console.log(autos[1]);

//agregar nuevos valores
//.push para agregar nuevos valores a nuestro arreglo.
autos.push('Audi');
console.log(autos);