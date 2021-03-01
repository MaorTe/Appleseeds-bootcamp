// CAPS
function makeAllCaps(arr) {
	return new Promise((resolve) => {
		resolve(arr.join(',').toUpperCase().split(','));
	});
}
// SORT
function sortWords(arr) {
	const sorted = arr.sort(function (a, b) {
		let x = a.toUpperCase(),
			y = b.toUpperCase();
		return x == y ? 0 : x > y ? 1 : -1;
	});

	return new Promise(function (resolve, reject) {
		/^[a-zA-Z]+$/.test(sorted.join(''))
			? resolve(sorted)
			: reject('contains numbers');
	});
}

const arrWordsOnly = ['baa', 'cbb', 'gg', 'Ad'];
const arrWithNumbers = ['baa', 'cbb', 123, 'Ad'];
// check(arrWordsOnly)
// 	.then((success) => console.log(success))
// 	.catch((err) => console.error(err));
// check(arrWithNumbers)
// 	.then((success) => console.log(success))
// 	.catch((err) => console.error(err));

sortWords(arrWordsOnly)
	.then(function (arr) {
		console.log('sorted');
		return makeAllCaps(arr);
	})
	.then(function (arr) {
		console.log('caps');
		console.log(arr);
	})
	.catch((err) => {
		console.log(err);
	});
