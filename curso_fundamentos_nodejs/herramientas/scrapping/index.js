const puppeteer = require('puppeteer');

// funciones autoejecutadas
// arraow function
// funcion asincrona y anonima
// y es una expresion, porque esta entre parentesis
// y se ejecuta con simples parentesis ();

(async ()=>{
    console.log('Lanzamos navegador!');
    // const browser = await puppeteer.launch(); //No se ve el navegador
    const browser = await puppeteer.launch({headless:false});//Muestra el navegador

    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');

    var titulo1 = await page.evaluate(()=>{
        const h1=document.querySelector('h1');
        h1.innerHTML = 'Hola, soy un titulo modificado';
        // console.log(h1.innerHTML);
        return h1.innerHTML;
    });

    var info = await page.evaluate(()=>{

        const idinfo = document.querySelector('#siteSub');
        return idinfo.innerHTML;

    });


    console.log(titulo1);
    console.log(info);

    // console.log('Cerramos el navegador...');
    // browser.close();
    // console.log('Navegador cerrado');
}) 
();//Se ejecuta asi la expresion