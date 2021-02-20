function countDuplicates(str) {
	let msg = ``;
	const strArr = str
		.toLowerCase()
		.split('')
		.sort()
		.join('')
		.match(/(.)\1+/g);

	if (strArr != null) {
		strArr.forEach((el) => {
			if (el.length > 1) {
				msg += `${el[0]} occurs ${el.length} times\n`;
			}
		});
	}
	return msg.length > 0 ? msg : `no characters repeats more than once`;
}

console.log(countDuplicates('abcde'));
console.log(countDuplicates('aabbcde'));
console.log(countDuplicates('aabBcde'));
console.log(countDuplicates('indivisibility'));
console.log(countDuplicates('Indivisibilities'));
console.log(countDuplicates('aA11'));
console.log(countDuplicates('ABBA'));
