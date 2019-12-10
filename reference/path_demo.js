const path = require('path');

// Base filename

console.log(path.basename(__filename));


// Base dirname

console.log(path.dirname(__filename));

// file extention

console.log(path.extname(__filename));

// create path object

console.log(path.parse(__filename).base);

// concatenate paths

console.log(path.join(__dirname, 'test', 'test.html'));
