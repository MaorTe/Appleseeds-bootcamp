const readlineSync = require('readline-sync');

var num = Number(readlineSync.question("Enter a positive number ", {
  limit: /^[+]?\d+$/,
  limitMessage: 'Sorry, $<lastInput> is not a positive number.',
  defaultInput: 'Empty'
}));

function nFactorial(num) {
  var result = num;
  if (num === 0 || num === 1)
    return 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}

console.log(nFactorial(num));