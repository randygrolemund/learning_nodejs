const fs = require('fs');
const dir = './test';
const hour = new Date();
const hours = hour.getHours();
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
  console.log('Folder created..');
} else {
  console.log('Folder already exists, skipping...');
};

rl.question('What is your name ? ', function(name) {
  if (hours > 20) {
    console.log(`Good evening, ${name}!`);
  };
  rl.close();
});


