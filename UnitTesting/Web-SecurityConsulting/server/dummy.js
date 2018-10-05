// Node Event Libs
var EventEmitter = require('events');
module.exports = new EventEmitter();

// Validate mail function
var validateEmail = function (email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

module.exports.validateEmail = validateEmail;
