function maskify(str) {
	str = str.trim();
	withoutLastFourChars = str.slice([...str], -4);
	return '#'.repeat(withoutLastFourChars.length) + str.slice(-4);
}
console.log(maskify('4556364607935616'));
console.log(maskify('64607935616'));
console.log(maskify('1'));
console.log(maskify(''));
console.log(maskify('Skippy'));
console.log(maskify('Nananananananananananananananana Batman!'));
