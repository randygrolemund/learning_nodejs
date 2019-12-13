/* eslint-disable require-jsdoc */
// npm install prompt alert-node bcrypt

const alert = require('alert-node');
const prompt = require('prompt');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const someotherpasword = 'test12345';
const properties = [
  {
    name: 'username',
    validator: /^[a-zA-Z\-]+$/,
    warning: 'Username must be only letters or dashes',
  },
  {
    name: 'password',
    hidden: true,
  },
];

prompt.start();

prompt.get(properties, function(err, result) {
  if (err) {
    return onErr(err);
  }
  if (result.username == '') {
    alert('Username cannot be null!');
  } else {
    const hash = bcrypt.hashSync(result.password, saltRounds);
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Password: ' + result.password);
    console.log(hash);

    bcrypt.compare(someotherpasword, hash, function(err, res) {
      if (res == true) {
        console.log('true');
      } else {
        console.log('false');
      }
    });
  };
});

function onErr(err) {
  console.log(err);
  return 1;
}
