const fs = require('fs');

const dir = './test';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
  console.log('Folder created..');
} else {
  console.log('Folder already exists, skipping...');
}

