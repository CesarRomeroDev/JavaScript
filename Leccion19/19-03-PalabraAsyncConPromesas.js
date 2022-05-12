let promesa = new Promise((resolve) => {
    setTimeout(() => resolve('saludos con promesa y timeout'), 3000);
});

async function miFuncionConPromesa(){
    return 'Saludos con promesa y async';
}

miFuncionConPromesa().then(valor => console.log(valor));