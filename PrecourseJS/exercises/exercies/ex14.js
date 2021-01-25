const readlineSync = require('readline-sync');

var rndNum;
var num = Number(readlineSync.question("Enter a positive number ", {
    limit: /^0*(?:[1-9]\d*)$/,
    limitMessage: 'Sorry, $<lastInput> is not a positive number.',
    defaultInput: '-1'
}));
    var arr = Array.from({ length: num });

    for (let i = 0; i < arr.length; i++) {
        rndNum = Math.floor(Math.random() * 50) + 1;
        arr[i] = rndNum;
    }
    console.log(arr);

    var max = arr.reduce(function (a, b) {
        return Math.max(a, b);
    });
    var min = arr.reduce(function (a, b) {
        return Math.min(a, b);
    });
   console.log(`Max = ${max}`);
    console.log(`Min = ${min}`);






