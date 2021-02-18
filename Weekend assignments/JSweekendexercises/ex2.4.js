function findUniq(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] !== arr[i + 1]) {
			return arr[i + 1];
		}
	}
}

arr = [1, 1, 1, 2, 1, 1];
console.log(findUniq(arr));
// findUniq([0, 0, 0.55, 0, 0]) === 0.55;
