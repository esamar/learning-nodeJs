function asincrona(callback){
    setTimeout(function(){
        try{
            let a = 3 + z;
            callback(null, a);
        }
        catch(e)
        {
            callback(e, null);
        }
    }, 1000);
}

asincrona(function(err,dato){
    if (err)
    {
        console.error('Tenemos un error');
        console.log(err);
        // throw err;//Bloquea la ejecucion
        return false;
    }
    console.log('Todo ha salido bien');
});