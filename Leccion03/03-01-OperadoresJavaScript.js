//Operadores aritmeticos
let a = 3 , b = 2;
let z = a + b;
console.log("resultado de la suma: " + z );

z = a - b;
console.log("Restado de la resta: " + z );

z = a * b;
console.log("Resultado de la multiplicacion: " + z );

z = a / b;
console.log("Resultado de la divicion: " + z);

z = a % b; //residuo de la divicion
console.log("Resultado de Modulo: " + z);

z = a ** b;
console.log("Resultado del exponente es: " + z );

//Incremento

//Pre-Incremento(el operador ++ incremento en uno )
z = ++a;
console.log(a);
console.log(z);

//post-incremento(el operador ++ despues de la variabel. primero se utiliza el valor de la variable y posterior mente se incrementa)
//z tiene el valor de 2 y luego se post incrementa a 3
z = b++;
console.log(b); //incrmento pendiente
console.log(z)


//decremento
//predecremento
z = --a;
console.log(a);
console.log(z);

//postdecremento
z = b--;
console.log(b);
console.log(z);