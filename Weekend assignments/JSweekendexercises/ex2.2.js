const arr = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
const decToBin = (arr) => {
	const binStr = arr.join('');
	return parseInt(binStr, 2);
};
console.log(decToBin(arr));
