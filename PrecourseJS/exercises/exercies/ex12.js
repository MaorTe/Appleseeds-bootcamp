const readlineSync = require('readline-sync');

var str = readlineSync.question('Enter a message ', { defaultInput: 'Empty' });

function LetterChanges(str) {
    var capVowels = [];
    for (var i = 0; i < str.length; i++) {

        var ch = str.charAt(i);
        if ('aeiouAEIOU'.indexOf(ch) !== -1)
            capVowels.push(ch.toUpperCase());
        else
            capVowels.push(ch);
    }
    return capVowels.join("");
}

// function LetterChanges1(str) {
//     return str.replace(/[aeiou]/g, function (l) {
//         return l.toUpperCase();
//     });
// }
console.log(LetterChanges(str));
