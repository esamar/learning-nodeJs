soyAsincrona = (callback)=>{
    
    console.log("Hola soy una funcion asincrona");
    
    setTimeout(()=>{
        console.log('Estoy siendo asincrona');
        callback();
    }, 1000);

}

console.log('Iniciando proceso...');

soyAsincrona(()=>{
    console.log('Terminando proceso...')
});
