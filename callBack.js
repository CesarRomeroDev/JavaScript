//CALLBACK ( llamada de vuelta)
//sincrono
let compras = '🛒';

function hacerLaCompra(collback){
    setTimeout(() => {
        compras += '🎁';
        collback();
    },5000)

}

hacerLaCompra(() => {
    console.log(compras)
    hacerLaCompra(() =>{
        console.log(compras)
        hacerLaCompra(() =>{
            console.log(compras)
        })
    })
});