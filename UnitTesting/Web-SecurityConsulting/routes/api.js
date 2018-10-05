var express = require('express');
var router = express.Router();
var mailer = require("nodemailer"); // evio de correos

// myapp.com/api
router.get('/', function(req, res, next) {
  res.send('this is the api main route');
});

// myapp.com/api/test
router.get('/test', function(req, res){
  res.send('respond with mail');
});

// myapp.com/api/version
router.get('/version', function(req, res){
  res.send('1.0.0.1');
});

// SEND EMAIL...
// myapp.com/api/mail
router.get('/mail', function(req, res, next) {

   var smtpTransport = mailer.createTransport();

   var mailOptions = {
       from: "Security Consulting <noreply@securityconsulting.com>",
       to: "juan.zamora@nerdyne.com",
       subject: "Security Consulting S.A",
       text: "Bienvenido a Security Consulting",
       html: "<b>Security Consulting le tiene un regalo especial para esta navidad.</b>"
   }

   smtpTransport.sendMail(mailOptions, function(error, response){
       if(error){
           console.log("Error al enviar correo...");
           console.log(error);
       }else{
           console.log("Message sent: " + response.message);
       }
   });


  // se rendera la pagina de mail...
  // res.render('mail', { title: 'Correo Enviado' });
  res.send('EMAIL SENT Chavalazos!');
});

module.exports = router;
