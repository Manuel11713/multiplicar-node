const { argv } = require('./config/yargs')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js') //archivo
const colors = require('colors');


let respuestafunction = async(numero, limite) => {
    let respuesta = await crearArchivo(numero, limite);
    return respuesta;
}

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        respuestafunction(argv.base, argv.limite)
            .then(mensaje => console.log(mensaje.blue))
            .catch(error => console.log(error));
        break;
    default:
        console.log('comando no reconocido');
}