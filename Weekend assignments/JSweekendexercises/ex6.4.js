function uniqueLetters(str) {
	if (!/^[a-zA-Z\s]*$/.test(str))
		return 'string must be letters from a..z and A..Z only.';
	else if (str === '') str = ' ';

	let seen = {};
	let arr = str.toLowerCase().split('');
	arr.forEach((item) => (seen[item] = seen[item] + 1 || 1));
	return !(Object.values(seen).find((value) => value > 1) > 1);
}

console.log(uniqueLetters(''));
console.log(uniqueLetters('Dermatoglyphics'));
console.log(uniqueLetters('aba'));
console.log(uniqueLetters('moOse'));
