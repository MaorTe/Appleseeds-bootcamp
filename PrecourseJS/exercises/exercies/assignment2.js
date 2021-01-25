const readlineSync = require('readline-sync');

var totalAmount = 50, betAmount, name, userCard, pcCard;

logo = '////////-----------Welcome To WAR!-----------////////'

name = readlineSync.question('Please enter your name ', {
    limit: /^[a-zA-Z\s]*$/,
    limitMessage: 'Sorry, $<lastInput> is not a name.',
    defaultInput: '0'
});

while (1) {
    console.log('Hello ' + name + ' You currently have ' + totalAmount + ' shekels');
    betAmount = Number(readlineSync.question(`Place your bet for the next round: 1 to ${totalAmount} `, { defaultInput: '-1' }));
    if (betAmount <= 0) {
        console.log(`Invalid bet amount, I said between 1 to ${totalAmount} and you typed ${betAmount} .
    Sorry, i dont play with liars!! Bye
    Game will now end...`);
        break;
    }
    else if (betAmount > totalAmount || isNaN(betAmount)) {
        console.log(`Invalid bet amount, not enough money
    Game will now end...`);
        break;
    }
    else {
        userCard = Math.floor(Math.random() * 12) + 1;
        pcCard = Math.floor(Math.random() * 12) + 1;
        console.log(` ~~ Your card is ${userCard} And pc card is ${pcCard} ~~`);

        if (pcCard >= userCard) {
            totalAmount -= betAmount;
            console.log(`You lost ${betAmount} And now you have ${totalAmount}`);
        }
        else {
            totalAmount += betAmount;
            console.log(`**You won ${betAmount} !!** And now you have ${totalAmount}`);
        }

        if (totalAmount <= 0) {
            console.log('You are broke... Bye Bye');
            break;
        }
        else {
            console.log('What would you like to do? ');
            let availableOptions = ['Play another round ', 'Leave with my money :) '];
            let index = readlineSync.keyInSelect(availableOptions, null, { cancel: false });
            if (index === 0)
                console.log(`~~~~~~~~~~~~~~~~~~
A new game has started!
~~~~~~~~~~~~~~~~~~`);
            else {
                console.log(`You got left ${totalAmount} shekels
Thanks for playing! 
        Game will now end...`);
                break;
            }
        }
    }
}
