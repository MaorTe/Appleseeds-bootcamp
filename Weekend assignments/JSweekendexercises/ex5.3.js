function toCamelCase(str) {
	debugger;
	arr = str.split('');
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '-') {
			arr[i + 1] = arr[i + 1].toUpperCase();
			arr[i] = '';
		}
	}
	return arr.join('');
}
console.log(toCamelCase('the-stealth-warrior'));
