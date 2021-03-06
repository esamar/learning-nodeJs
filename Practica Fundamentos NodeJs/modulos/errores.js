function otrafuncion()
{
    return serompe();
}

function serompe()
{
     return 3 + z;
}

function seRompeAsincrona(cb){
    setTimeout(function(){
        try {
            return 3 + z;
        } catch (err) {
            console.log('Error en mi funcion asincrona');
            cb(err);
        }
    });
}

try
{
    // serompe();
    // otrafuncion();
    seRompeAsincrona( function(err){
        console.log(err.message);
    });
} catch(err)
{
    console.error('Vaya, algo se ha roto...');
    console.error(err.message);
    console.log('Pero no pasa nada, lo hemos capturado')
}

