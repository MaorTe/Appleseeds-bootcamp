const readlineSync = require('readline-sync');

var temp, arrNum = [];
var num = (readlineSync.question("Enter an integer number ", {
    limit: /^[-+]?\d+$/,
    limitMessage: 'Sorry, $<lastInput> is not an integer number.',
    defaultInput: 'Empty'
}));
arrNum = num.split('');
function reverse(arrNum) {

     let len = arrNum.length;
    for (var i = 0; i < len / 2; i++) {
        temp = arrNum[i];
        arrNum[i] = arrNum[len - 1 - i];
        arrNum[len - 1 - i] = temp;
    }

    if (arrNum[len - 1] === '-') {
        arrNum.pop();
        arrNum.unshift('-');
    }
    else if (arrNum[len - 1] === '+') {
        arrNum.pop();
        arrNum.unshift('+');
    }
    console.log(arrNum);
}
reverse(arrNum);