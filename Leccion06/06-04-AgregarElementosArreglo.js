const autos = ['BMW', 'Mercedes Benz', 'Volvo'];

for (let i = 0; i < autos.length; i++) {
    console.log( i + ' : ' +  autos[i])
}

// 1,2,3,4,5  indices
// BMW, Mercedes Benz,  Volvo  elementos
autos.push('Audi');
console.log(autos.length);

autos[autos.length] = 'Cadillac';

autos[5] = 'Porche';

console.log(autos);

for(let i = 0; i < autos.length; i++){
    console.log( i + ' : ' + autos[i] );
}

