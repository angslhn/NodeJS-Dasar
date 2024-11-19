const validator = require('validator');

const email = "angslhn@gmail.com";
if (validator.isEmail(email)) {
    console.log('Ini adalah email!');
} else {
    console.log('Ini bukan email!');
}