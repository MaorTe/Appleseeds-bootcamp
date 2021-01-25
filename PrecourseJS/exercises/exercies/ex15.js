const readlineSync = require('readline-sync');

var str1 = readlineSync.question('Enter a message ', { defaultInput: 'Empty' }).split(' ');
var str2 = readlineSync.question('Enter a message ', { defaultInput: 'Empty' }).split(' ');

function joinTwoStrings(str1,str2){
    let arrCombined = [];

    for (let i = 0; i < str1.length; i++) {
        arrCombined.push(str1[i]);
    }
    for (let i = 0; i < str2.length; i++) {
        arrCombined.push(str2[i]);
    }
    return arrCombined//.join(' ');
}

console.log(joinTwoStrings(str1,str2));

