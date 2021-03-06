console.log('Algo');
console.error('un error');
console.warn('una alerta');

var tabla = [{
    a:1,
    b:'A',
    c:'perfecto'
},{
    a:2,
    b:'B',
    c:'me gusta'
},]

console.table(tabla);

console.log('conversacion:');
console.group('conver');
console.log('Hola');
console.log('blablablabla');
console.log('blablablabla');
console.log('blablablabla');
console.groupEnd('bla');
console.log('Adios');

console.count('Veces');
console.count('Veces');
console.count('Veces');
console.count('Veces');
console.count('Veces');
console.count('Veces');