const alert = require('alert-node')
const prompt = require('prompt');

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
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Password: ' + result.password);
  };
});


function onErr(err) {
  console.log(err);
  return 1;
}
