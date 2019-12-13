const fs = require('fs');
const hour = new Date();
const dir = './test';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
  console.log('Folder created..');
} else {
  console.log('Folder already exists, skipping...');
};

const hours = hour.getHours();

if (hours > 20) {
  console.log('Good evening!');
};

