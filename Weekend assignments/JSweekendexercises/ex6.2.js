function countDuplicates(str) {
	let msg = ``;
	const strArr = str
		.toLowerCase()
		.split('')
		.sort()
		.join('')
		.match(/(.)\1+/g);

	// console.log(strArr);
	if (strArr != null) {
		strArr.forEach((el) => {
			if (el.length > 1) {
				msg += `${el[0]} occurs ${el.length} times\n`;
			}
		});
	}
	return msg.length > 0 ? msg : `No character repeats more than once`;
}

// console.log(countDuplicates('aabbcde'));
// console.log(countDuplicates('123'));
// console.log(countDuplicates('11223'));
// console.log(countDuplicates('aabbcde11223'));
console.log(countDuplicates('Indivisibilities'));
