function fib(n) {
	let sum = 0;
	if (n <= 1) return n;

	return (sum = fib(n - 1) + fib(n - 2));
}

function generateFib(n) {
	let fib = [];
	fib[0] = 0;
	// console.log((fib[0] = 0));
	fib[1] = 1;
	// console.log((fib[1] = 1));
	for (let i = 2; i <= n; i++) {
		fib[i] = fib[i - 2] + fib[i - 1];
	}
	console.log(fib.flat(2));
}
generateFib(10);
