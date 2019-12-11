const path = require('path');

// Base filename

console.log(path.basename(__filename));


// Base dirname

console.log(path.dirname(__filename));

// file extention

console.log(path.extname(__filename));

// create path object
const filename = path.parse(__filename).base;
console.log(filename);

// concatenate paths

console.log(path.join(__dirname, 'test', 'test.html'));
