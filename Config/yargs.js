const argv= require('yargs')

        .option('b', {
            alias:'base',
            type:'number',
            demandOption: true, 
            describe: 'Es la base de la tabla a multiplicar'
        })
        .option('l', {
            alias:'listar',
            type:'boolean',
            default:false,
            describe: 'muestra la tabla en consola'
        })
        .option('h', {
            alias:'hasta',
            type:'number',        
            default: 10,
            describe: 'Rango a calcular'
        })
        .check((argv, options) => {
            if(isNaN(argv.b)){
                throw 'La base tiene que ser un número'
            }
            return true;
        })
        .check((argv, options) => {
            if(isNaN(argv.l)){
                throw 'El multiplicador tiene que ser un número'
            }
            return true;
        })
        .argv;

        module.exports = argv;