process.on('beforeExit', ()=>{
    console.log('El proceso va a terminar')
});

process.on('exit', ()=>{
    console.log('El proceso terminó')
});

process.on('uncaughtException', (err, origin) =>{
    console.error('Vaya se nos ha olvidado capturar el error');
    console.error(err);
})

funcionQueNoExiste();
