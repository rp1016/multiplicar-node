const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(Number(argv.base), argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log("el error es : " + err));
        break;

    default:
        console.log('comando no reconocido');

}

// recibiendo parametros.
let argv2 = process.argv;
console.log('Base: ' + argv.base + ' Limite: ' + argv.limite);
//console.log(argv2);

/*
console.log("El paramtro ingresado es: " + base);
*/