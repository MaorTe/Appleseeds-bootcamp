// 1
const arr = new Array(100);
console.log(arr.fill(7));

// 2
function createRange(start, end) {
	const range = Array.from({ length: end - start + 1 }, function (item, index) {
		return index + start;
	});
	return range;
}
console.log(createRange(1, 100));

// 5
console.log(Array.isArray(arr));

// 6
const arr1 = [...arr];
const arr2 = arr;
