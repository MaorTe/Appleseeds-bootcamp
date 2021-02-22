const array = ['Hello', 'Good Day', 'Your Welcome', 'hotdog', 'hamburgers'];

const countLetters = (array) => {
	//join all letters to array, each letter is lowercase
	const joinArray = array.join('').toLowerCase().split('');
	const letters = {};

	for (let i = 0; i < joinArray.length; i++) {
		if (joinArray[i] === ' ') {
			continue;
		}
		// if (letters[joinArray[i]]) {
		// 	letters[joinArray[i]] = letters[joinArray[i]] + 1;
		// } else {
		// 	letters[joinArray[i]] = 1;
		// }

		//insert the appearance of a letter from joinArray into the correct position of letters object by the correct Unicode and insert by 1, if its the first letter make it 1;
		letters[joinArray[i]] = letters[joinArray[i]] + 1 || 1;
	}
	//iterate on the letters object keys and sort the letters ascending order ,insert to variable
	const highestLetter = Object.keys(letters).sort((a, b) => {
		return letters[b] - letters[a];
	});

	return [letters, highestLetter[0]];
};
console.log(countLetters(array));
