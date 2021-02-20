function accum(str) {
	if (!/^[a-zA-Z\s]*$/.test(str))
		return 'string must be letters from a..z and A..Z only.';
	arr = str.trim().split('');
	let arr1 = arr.map((el, i) => {
		return i !== arr.length - 1
			? el.toUpperCase() + el.toLowerCase().repeat(i) + '-'
			: el.toUpperCase() + el.toLowerCase().repeat(i);
	});
	return arr1.join('');
}
console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));
