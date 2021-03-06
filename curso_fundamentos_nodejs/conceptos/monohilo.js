console.log('hola mundo');

let i = 0;

setInterval( ()=>{
    console.log('Sigo activo', i);
    i++;

    // if ( i===5){
    //     console.log("Forzamos el error");
    //     var a = 3+z;
    // }
}, 1000);

console.log('Segunda instrucción');