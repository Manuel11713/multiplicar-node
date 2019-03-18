const fs = require('fs');
let crearArchivo = async(base) => {

    let data = '';

    for (let i = 1; i <= 10; i++) {
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

let base = 5;

let respuestafunction = async(numero) => {
    let respuesta = await crearArchivo(numero);
    return respuesta;
}

respuestafunction(base)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));