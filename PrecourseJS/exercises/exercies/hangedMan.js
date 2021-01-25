var figlet = require('figlet');
const readlineSync = require('readline-sync');

function figletTitle() {
    figlet.text('--Hang Man!--', {
        font: 'slant',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }, (function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
    }));
}

async function gameFunc() {
    await new Promise(r => setTimeout(r, 200));
    var guesses = 10, letter;
    var words = [
        'Javascript', 'Monkey', 'Amazing',
        'Pancake', 'Galvainze', 'Cohort',
        'Concatenate', 'Iteration', 'Index',
        'Code', 'Angular', 'React',
        'Appleseeds'
    ];
    var randomWord = words[Math.floor(Math.random() * words.length)];
    var strAsterix = new Array(randomWord.length).fill('*');

    console.log(`You have ${guesses} guesses
The word is: ${strAsterix.join('')}`);
    
    while (1) {
        letter = readlineSync.question('Please enter one character ', {
            limit: /^[a-zA-Z\s]{1}$/,
            limitMessage: 'Invalid input, Please enter only one character ',
            defaultInput: '-1'
        });
        
        letter = letter.toLowerCase();
        if (randomWord.includes(letter.toLowerCase()) ||
            randomWord.includes(letter.toUpperCase())) {
            
            for (let i = 0; i < strAsterix.length; i++)
                if (randomWord[i].toLowerCase() === letter)
                    strAsterix[i] = letter;
            console.log(strAsterix.join(''));
        } else {
            guesses--;
            if (guesses > 0)
                console.log(`You have ${guesses} guesses
The word is: ${strAsterix.join('')}`);
        }

        if (!strAsterix.includes('*')) {
            console.log(`***Wow you are the master of words!***`);
            break;
        }
        else if (guesses === 0) {
            console.log(`No more guesses, 
The secret word is ${randomWord}
        ----GAME OVER!----`);
            break;
        }
    }
}

figletTitle();
gameFunc();

