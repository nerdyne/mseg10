var buster = require("buster");
var assert = buster.referee.assert;
var expect = buster.assertions.expect;

// esta es el modulo que vamos a probar
var lib = require("../server/dummy.js");

// mas ejemplos y pruebas en
// http://docs.busterjs.org/en/v0.6.x/modules/buster-assertions/

buster.testCase("Prueba Servicio Version", {
    "Se obtiene la version": function (done) {

      var http = require('http');
      var options = {
          host: 'localhost',
          port: 3000,
          path: '/api/version'
      };

      http.get(options, function(res) {
        //console.log("Got response: " + res.statusCode);

        res.on("data", function(data) {
          //console.log("BODY: " + data);
          assert(data == '1.0.0.0');
          done();
        });
      }).on('error', function(e) {
        //console.log("Got error: " + e.message);
        done();
      });
    }
});


// Prueba de Ejemplo
buster.testCase("A test case", {
    "la prueba mas obvia": function () {
        assert(true);
    }
});

buster.testCase("Prueba Correo 1", {
    "correo simple": function () {
        assert(lib.validateEmail("juan@cenfotec.com"));
    }
});

buster.testCase("Prueba Correo 2", {
    "correo compuesto": function () {
        assert(lib.validateEmail("juan.zamora@cenfotec.com"));
    }
});

buster.testCase("Prueba Correo 3", {
    "correo dominio compuesto": function () {
        assert(lib.validateEmail("juan.zamora@cenfotec.ed.cr"));
    }
});

buster.testCase("Prueba Correo 4", {
    "negativa malformacion 1": function () {
        // esta prueba debe ser falsa
        assert.equals(lib.validateEmail("juan.zamora@cenfotec"), false);
    }
});

buster.testCase("Prueba Correo 5", {
    "negativa malformacion 2": function () {
        // esta prueba debe ser falsa
        expect(lib.validateEmail("juan.zamora#cenfote.com")).toBe(false);
    }
});
