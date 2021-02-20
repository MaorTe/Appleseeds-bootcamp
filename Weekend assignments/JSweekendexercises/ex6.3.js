// side note: An awesome way for unique letters with the Set data structure!
// array = a.split('');
// uniq = [...new Set(array)];
// console.log(uniq);

function uniqueLetters(arr) {
	let seen = {};
	return arr.filter(function (item) {
		return seen.hasOwnProperty(item) ? false : (seen[item] = true);
	});
}
function longest(str1, str2) {
	if (!/^[a-z\s]*$/.test(str1 + str2))
		return 'string must be letters from a..z only.';
	const combined = [...str1.split(''), ...str2.split('')].sort();
	return uniqueLetters(combined).join('');
}

console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));
console.log(
	longest('abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz')
);
