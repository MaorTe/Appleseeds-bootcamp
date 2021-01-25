const readlineSync = require('readline-sync');

var num = Number(readlineSync.question("Enter a positive number ", {
    limit: /^0*(?:[2-9]|[1-9]\d\d*)$/,
    limitMessage: 'Sorry, $<lastInput> is not a positive number greater than 1.',
    defaultInput: '-1'
}));
//1 is not prime by definition so i included him in the regex.

function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1
}
for (let i = 1; i <= num; i++) {
    if (isPrime(i))
        console.log(i);
}

