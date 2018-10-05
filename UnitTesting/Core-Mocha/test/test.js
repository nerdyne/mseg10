// libreria de Cenfotec
var api = require('api');

// Libreria Assert de Mocha
// mas ejemplos en: https://mochajs.org/
var assert = require('assert');

describe('Api', function() {
  describe('validate_mail - caso 1', function() {
    it('Debe devolver true para name@domain.com', function() {
      assert.equal(api.validate_mail('name@domain.com'), true);
    });
  });
});

describe('Api', function() {
  describe('validate_mail - caso 2', function() {
    it('Debe devolver true para name.other@domain.com', function() {
      assert.equal(api.validate_mail('name.other@domain.com'), true);
    });
  });
});

describe('Api', function() {
  describe('validate_mail - caso 3', function() {
    it('Debe devolver true para a@domain.com', function() {
      assert.equal(api.validate_mail('a@domain.com'), true);
    });
  });
});

describe('Api', function() {
  describe('validate_mail - caso 4', function() {
    it('Debe devolver true para 12345@domain.com', function() {
      assert.equal(api.validate_mail('12345@domain.com'), true);
    });
  });
});

// prueba Asyncrona del Servicio del Clima
describe('Api', function() {
  describe('Clima por Ciudad de London (clima_ciudad)', function() {
    it('Debe devolver la longitud y latitud de londres ', function(done) {

      api.clima_ciudad('london', function(e){
        var lon = e.respuesta.coord.lon;
        var lat = e.respuesta.coord.lat;

        assert.equal(lon, '-0.13');
        assert.equal(lat, '51.51');

        done();
      });

    });
  });
});
