const readlineSync = require('readline-sync');

var amountOfPpl = Number(readlineSync.question("How many people are you going with? ", { defaultInput: 'Not match' }));

try {
    if (isNaN(amountOfPpl)) {
        throw new Error('stop execution(1)');
    }
    if (!readlineSync.keyInYN('Should it be Kosher? ')) {
        throw new Error('stop execution(2)');
    }
    else if (!readlineSync.keyInYN('should it be Kashrut Lemehadrin? ')) {
        throw new Error('stop execution(3)');
    }
    else {
        restaurants = ['Yashka Shwarma', 'Kosher Fine Dining', 'Mapu', 'Mashya', 'Nahat Cafe'];
        index = readlineSync.keyInSelect(restaurants, 'Available restaurants in Tel Aviv: choose your favorite!');
        if (index === -1) {
            throw new Error('stop execution(4)');
        }
        else
            console.log('You chose ' + restaurants[index] + ', Bon appetit!  ');
    }
} catch (e) {
    console.log(e);
}

