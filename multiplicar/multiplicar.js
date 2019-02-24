// requiers
const fs = require('fs');
const colors = require('colors');
let data = '';

let listarTabla = (base, limite = 10) => {
    console.log('======================='.red);
    console.log(`====tabla de ${base}=====`.green);
    console.log('======================='.red);
    console.log('======================='.red);


    for (let i = 1; i <= limite; i++) {
        let producto = base * i;
        console.log(`${base} x ${i} = ${producto} \n`);
    }
}

let crearArchivo = (base, limite = 10) => {


    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            let producto = base * i;
            data += `${base} x ${i} = ${producto} \n`;
        }


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err) {
                rejec(err);
            } else {
                resolve(`tabla-${base}-al-${limite}.txt`);
            }

        });

    })

};

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla
};