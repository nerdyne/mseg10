// Cenfotec e-Commerce Api
// Seguridad de Aplicaciones y Sistemas
// Definicion de paquetes del API
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var api        = require('api');

// configuracion del puerto del API
var port = process.env.PORT || 8080;

// configuracion de body parser para POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configuracion de Rutas en Express
var router = express.Router();

// registro de rutaas
app.use('/api', router);

// ---------------  API ----------------------------

// devuelve la version actual del api
router.get('/', function(req, res) {
    res.json({ message: 'eComm api version: ' + api.version() });
});

// metodo Demo: Remover.
router.get('/foo', function(req, res) {
    res.json({ message: api.foo() });
});

// metodo Demo: Remover.
router.get('/bar', function(req, res) {
    res.json({ message: api.bar() });
});

// Validacion de Correo Electronico
router.post('/validate/mail', function(req, res) {
    res.json({ isValid: api.validate_mail(req.body.mail) });
});

// revisa de que no venga tags de html
router.post('/validate/safetext', function(req, res) {
    res.json({ isValid: false });
});

// valida numeros de telefono en estados unidos
router.post('/validate/phone', function(req, res) {
    res.json({ isValid: false });
});

// devuelve el json completo para el producto id
router.get('/products/:prod_id', function(req, res) {
    res.json({ product: req.params.prod_id  });
});

// devuelve el vendor de un producto por id
router.get('/products/:prod_id/vendor', function(req, res) {
    res.json({ vendor: req.params.prod_id  });
});

// devuelve la transaccion por Id
router.get('/transactions/:trans_id/', function(req, res) {
    res.json({ transaction: null  });
});

// devuelve el estado de una transaccion por Id
router.get('/transactions/:trans_id/status', function(req, res) {
    res.json({ status: null  });
});

// ---------------  API ----------------------------

// Inicio del API (Server Start)
app.listen(port);
