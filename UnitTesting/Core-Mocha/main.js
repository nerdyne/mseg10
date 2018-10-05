// 1 - npm install --save-dev mocha
// 1.1 - instale Mocha
// 2 - creamos folder test
// 2.1 - creamos el file, test.js
// 3 - importamos assert
// 4 - desarrollamos las pruebas
// 5 - actualizamos el package.json con el test: mocha
// 6 - corremos las pruebas con 'npm test'

// prueba de que sirve...
var api = require('api');

api.clima_ciudad('london', function(e){
  console.log(e.respuesta);
});
