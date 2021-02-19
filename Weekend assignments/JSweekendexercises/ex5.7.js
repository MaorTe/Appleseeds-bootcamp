const shortestWord = (str) => {
	arr = str
		.trim()
		.split(' ')
		.map((el) => (el.length > 0 ? (el = el.length) : Infinity));
	return Math.min(...arr);
};

console.log(shortestWord(`    I'm the  shortest   word or are you?  `));
