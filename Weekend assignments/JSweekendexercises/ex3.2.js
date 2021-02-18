let arr = [
	[2, 0],
	[5, 4],
	[9, 5],
	[3, 6],
];
// let sum1 = 0;
// const sum = arr.forEach((el) => {
// 	return (sum1 += el[0] - el[1]);
// });
let sum = arr.reduce((acc, next) => {
	return acc >= 0 ? (acc += next[0] - next[1]) : 'invalid input, less than 0';
}, 0);
console.log(sum);
