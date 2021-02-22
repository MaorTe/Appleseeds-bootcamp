// 1
const numbers = [2, 5, 6, 4, 3, 7];
// Using reduce method to find max value
const max = numbers.reduce((acc, curr) => Math.max(acc, curr));
// console.log(max);

// 2
const sumEven = numbers.reduce(
	(acc, curr) => (curr % 2 === 0 ? acc + curr : acc),
	0
);
// console.log(sumEven);
// 3
const avg = numbers.reduce((acc, curr) => acc + curr) / numbers.length;
console.log(avg);
