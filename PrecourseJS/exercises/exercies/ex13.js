const readlineSync = require('readline-sync');

var str = readlineSync.question('Enter a message ', {
    //limit: /^[a-zA-Z\s]*$/,
    //limitMessage: 'Sorry, $<lastInput> is not a sentence with words only.',
    defaultInput: 'Empty'
  });

function findLongestWord(str) {

    let strSplit = str.split(' '), longestWord = ' ', maxLen = 0;
    
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].match(/^[a-zA-Z\s]*$/)) {
            if (strSplit[i].length > maxLen) {
                maxLen = strSplit[i].length;
                longestWord = strSplit[i];
            }
        }
    }
    if (maxLen > 0)
        return longestWord;
    else {
        console.log(`Sentence doesnt contain words`);
        return false;
    }
}

console.log(findLongestWord(str));