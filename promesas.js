//promesas

let desarrollo = new Promise((res, rejec) => {
        const proyecto = "⚽";
        let aleatorio = Math.floor(Math.random() * 2);
        if(aleatorio === 1){
            res(`Gooool ${proyecto}`);      //resolve: salio satisfactoriamente
        }else {
            rejec('No fue Gol' + '🚫⚽');     //reject: no fue satisfactorio
        }
});

desarrollo
.then((proyecto) => console.log(proyecto))       //then se ejcuta cuando hay un resultado satisfactorio (resolve)
.catch((error) => console.log(error))       //cath para manejar el error (reject)
.finally(() => console.log('PARTIDO FINALIZADO'))      //no acepta ningun parametro, es solo para terminar 
