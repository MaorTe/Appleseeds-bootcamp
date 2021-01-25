const readlineSync = require('readline-sync');

var str = readlineSync.question('Enter a message ', { defaultInput: 'Empty' });

var replaced = str.replace(/\s/g, '*');

console.log(replaced);