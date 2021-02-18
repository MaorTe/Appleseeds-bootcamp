let num;
function summation(num) {
	let sum = 0;
	for (let i = 1; i <= num; i++) sum += i;
	return sum > 0 && sum;
}
console.log(summation(8));
