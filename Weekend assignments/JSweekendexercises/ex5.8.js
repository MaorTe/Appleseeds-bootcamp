const LongestWord = (str) => {
	debugger;
	return str
		.trim()
		.split(' ')
		.reduce((acc, cur) => (acc.length >= cur.length ? acc : cur));
};

console.log(LongestWord(`    I'm the  longest   word or are you?  `));
