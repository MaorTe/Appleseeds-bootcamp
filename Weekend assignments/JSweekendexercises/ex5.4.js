function toWeirdCase(str) {
	arr = str.trim().split('');
	for (let i = 0; i < arr.length; i += 2) {
		if (arr[i] === ' ') i++;
		arr[i] = arr[i].toUpperCase();
	}
	return arr.join('');
}

console.log(toWeirdCase('String'));
console.log(toWeirdCase('Weird string case'));
