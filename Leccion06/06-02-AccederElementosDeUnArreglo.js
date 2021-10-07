const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[1]);


//.length la cantidad de elementos que tiene nuestro arreglo

for (let i = 0; i < autos.length; i++) {
    console.log( i + ' : ' +  autos[i])
}