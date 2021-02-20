function uniqueLetters(str) {
	if (!/^[a-zA-Z\s]*$/.test(str))
		return 'string must be letters from a..z and A..Z only.';
	else if (str === '') str = ' ';

	var seen = {};
	let arr = str.toLowerCase().split('');
	arr.filter((item) => (seen[item] = seen[item] + 1 || 1));
	for (const value of Object.values(seen)) {
		return value <= 1;
	}
}

console.log(uniqueLetters('Dermatoglyphics'));
console.log(uniqueLetters('aba'));
console.log(uniqueLetters(''));
console.log(uniqueLetters('moOse'));
