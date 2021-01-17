const {exec, spawn } = require('child_process');

// En resumen, la diferencia entre spawn y exec
// Usa spawn cuando quieras que el proceso hijo devuelva datos binarios enormes a Node.
// Usa exec cuando quieras que el proceso hijo devuelva mensajes de estado simples.
// Usa spawn cuando quieras recibir datos desde que el proceso arranca modo asincrono.
// Usa exec cuando solo quieras recibir datos al final de la ejecución.


// exec('dir', (err, stdout, sterr)=>{
//     if ( err){
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// })
let proceso = spawn('cmd.exe', ['/c','dir']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data',(dato)=>{
    console.log('Esta muerto?');
    console.log(proceso.killed);
    console.log(dato.toString());
});

proceso.on('exit', ()=>{
    console.log('El proceso terminó');
})