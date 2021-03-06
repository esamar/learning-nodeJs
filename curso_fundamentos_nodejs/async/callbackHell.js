hola = (nombre , miCallBack)=>{
    setTimeout(()=>{
        console.log('Hola ' + nombre);
        miCallBack(nombre);
    }, 1000);
}

hablar = (callBackHablar)=>{
    setTimeout(()=>{
        console.log('Bla bla bla bla bla... ');
        callBackHablar();
    }, 1000);
}

adios = (nombre , otroCallBack)=>{
    setTimeout(()=>{
        console.log('Adios ' + nombre);
        otroCallBack(nombre);
    }, 1000);
}

// console.log('Iniciando proceso...');

// hola('Carlos', (nombre)=>{
//     hablar(()=>{
//         hablar(()=>{
//             hablar(()=>{
//                 hablar(()=>{
//                     hablar(()=>{
//                         adios(nombre, ()=>{
//                             console.log('Terminó proceso');
//                         })
//                     })
//                 })
//             })
//         })
//     })
// });

console.log('Intentar arreglarlo utilizando recursividad');
// recursividad
conversacion = (nombre, veces, callback)=>
{
    if ( veces >= 0 )
    {
        hablar( ()=>{
            conversacion(nombre, --veces, callback);
        })
    }
    else
    {
        adios(nombre, callback);
    }

}

console.log('Inicinado proceso');
hola('Carlos', (nombre)=>{
    conversacion(nombre, 3 ,()=>{
        console.log('Proceso terminado');
    })
})


