const numSiblings = Number(window.prompt('How many siblings do you have?'));

//before converting to number the type was string and === also check if the type
//is number or a string
console.log(typeof numSiblings);
if (numSiblings === 1) console.log('1 sibling!');
else if (numSiblings > 1) console.log('More than 1 sibling');
else console.log('No siblings');
