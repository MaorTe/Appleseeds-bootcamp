const readlineSync = require('readline-sync');
var num
do{
    num = Number(readlineSync.question('Please choose a number larger than 10 ', {defaultInput: 'Not match'}));

} while(num<=10 || isNaN(num))

console.log('thank you');

