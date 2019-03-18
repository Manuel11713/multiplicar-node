const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log("===========================.".green);
    console.log("====Tabla de Multiplicar===.".green);
    console.log("===========================.".green);
    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i}`.red);
    }
}


let crearArchivo = async(base, limite) => {

    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i} \n`
    }

    fs.writeFile(`tablas/tabla del ${base}.txt`, data, (err) => {
        if (err) {

            throw new Error(err);
        } else {
            return `tabla-${base}.txt`
        }
    });
    return `tabla-${base}.txt`
}

module.exports = {
    crearArchivo,
    listarTabla
}