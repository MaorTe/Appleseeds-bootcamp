// array = a.split('');
// uniq = [...new Set(array)];
// console.log(uniq);
function uniqueLetters(arr) {
	var seen = {};
	return arr.filter(function (item) {
		return seen.hasOwnProperty(item) ? false : (seen[item] = true);
	});
}
function longest(str1, str2) {
	if (!/^[a-z\s]*$/.test(str1 + str2))
		return 'string must be letters from a..z only.';
	arr1 = str1.split('');
	arr2 = str2.split('');
	const combined = [...arr1, ...arr2].sort();
	return uniqueLetters(combined).join('');
}

console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));
console.log(
	longest('abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz')
);
