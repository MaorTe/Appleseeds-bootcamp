const longestWord = (str) => {
	return str
		.trim()
		.split(' ')
		.reduce((acc, cur) => (acc.length >= cur.length ? acc : cur));
};

console.log(longestWord(`    I'm the  longest   word or are you?  `));
