const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 4
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en la consola la tabla de multiplicar', opciones)
    .command('crear', 'Genera un archivo con una tabla de multiplicar', opciones)
    .help()
    .argv //paquete

module.exports = {
    argv
}