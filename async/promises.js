hola = (nombre)=>{
    return new Promise( (resolve, reject)=>
    {
        setTimeout(()=>{
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1000);

    });

}

hablar = (nombre)=>{
    return new Promise( (resolve, reject)=>{
        setTimeout(()=>{
            console.log('Bla bla bla bla bla... ');
            resolve(nombre);
        }, 1000);
    })
    
}

adios = (nombre )=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Adios ' + nombre);
            // resolve(nombre);
            reject('Hay un error');
        }, 1000);
    })

}

console.log('Iniciando el proceso');

hola('carlos')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre)=>{
        console.log('Terminado el proceso');
    })
    .catch( error =>{
        console.log('Ha habido un error:');
        console.log(error);
    });