/*  Universidad Cenfotec
    Maestria en Ciberseguridad
    Creado por: izamora@ucenfotec.ac.cr

    Ejemplo 7.3: Buffers
*/

// Los buffers nos permiter trabajar con archivos binarios y streams

var buffer1 = new Buffer('Universidad Cenfotec ');
var buffer2 = new Buffer('Seguridad de Aplicaciones');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log(buffer3);
console.log("buffer3 content: " + buffer3.toString());

// mas informacion de los buffers https://nodejs.org/api/buffer.html
