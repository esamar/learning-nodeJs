async function hola(nombre){
    return new Promise( (resolve, reject)=>
    {
        setTimeout(()=>{
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1000);

    });

}

hablar = async (nombre)=>{
    return new Promise( (resolve, reject)=>{
        setTimeout(()=>{
            console.log('Bla bla bla bla bla... ');
            resolve(nombre);
        }, 1000);
    })
    
}

adios = async (nombre )=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Adios ' + nombre);
            resolve(nombre);
        }, 1000);
    })

}

async function main()
{
    let nombre = await hola('carlos');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Terminamos el proceso...')
}

console.log('Iniciamos el proceso...')
main();
