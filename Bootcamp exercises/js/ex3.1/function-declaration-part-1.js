/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.

    Submit the file to Hive

*/

// From function declarations to function expressions
const welcome = () => 'Welcome to Appleseeds Bootcamp!';

const power = (a) => Math.pow(a, 2);

const add = (a, b = 5) => a + b;

// From function expressions to function declarations
function hello() {
	return 'Hello!';
}

function squareRoot(a) {
	return Math.sqrt(a);
}

function randomNumbers(a, b) {
	return Math.random() * (a - b) + b;
}
