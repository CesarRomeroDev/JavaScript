let compras = '🛒';

function hacerLaCompra(){
    return new Promise((resolve) => {
        setTimeout(() => {
            compras += '🎁';
            console.log(compras);
            resolve()
        },5000)
    })

}

hacerLaCompra()
.then(() => hacerLaCompra())
.then(() => hacerLaCompra())
.then(() => hacerLaCompra())
.then(() => hacerLaCompra())