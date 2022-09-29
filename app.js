const { crearArchivo }= require('./helpers/multiplicar');
const argv = require('./Config/yargs');


require('colors');


console.clear();

crearArchivo( argv.b , argv.l , argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
