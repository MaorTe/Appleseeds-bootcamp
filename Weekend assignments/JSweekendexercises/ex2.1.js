const arr = [19, 5, 42, 2, 77];

function lowestNumSum(arr) {
	let twoLowestArr = arr.sort((a, b) => a - b).slice(0, 2);
	return twoLowestArr[0] + twoLowestArr[1];
}
console.log(lowestNumSum(arr));
