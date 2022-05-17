let arregloNumeros: Array<number>;

arregloNumeros = [1,2,3,4];

console.log(arregloNumeros);
console.log(arregloNumeros[0]);



//La getArrayfunción genera una matriz de elementos de any tipo.

function getArray(items : any[]) : any[] {
    return new Array().concat(items);
}

/**
 * Luego, la numberArray variable se declara llamando a la getArray función, 
 * pasándole una matriz de números, y la stringArray variable se declara con una matriz de cadenas. 
 * Sin embargo, debido a any que se usa el tipo, no hay nada que impida que el código inserte un stringen 
 * el numberArrayo un numberen el stringArray.
 */

let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push(25);                       // OK
stringArray.push('Rabbits');                // OK
numberArray.push('This is not a number');   // OK
stringArray.push(30);                       // OK
console.log(numberArray);                   // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray);                   // ["Cats", "Dogs", "Birds", "Rabbits", 30]


/**
 * En este ejemplo, con las declaraciones de variables para numberArray y 
 * stringArray actualizadas para llamar a la función con el tipo deseado, 
 * TypeScript evita que los elementos no válidos se agreguen a la matriz.
 */

 function getArray2<T>(items : T[]) : T[] {     //T: tipo generico
    return new Array<T>().concat(items);        //concat: Combina dos o mas arrays
}

 let numberArray2 = getArray2<number>([5, 10, 15, 20]);
 numberArray2.push(25);                      // OK
 numberArray2.push('holaMundo');             // Generates a compile time type check error
 console.log(numberArray2);
 
 let stringArray2 = getArray2<string>(['Cats', 'Dogs', 'Birds']);
 stringArray2.push('Rabbits');               // OK
 stringArray2.push(10);                      // Generates a compile time type check error
 console.log(stringArray2);