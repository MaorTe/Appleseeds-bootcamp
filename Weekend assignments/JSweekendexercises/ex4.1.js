function fib(n) {
	let arr = [0, 1];
	for (let i = 2; i < n + 1; i++) {
		arr.push(arr[i - 2] + arr[i - 1]);
	}
	return arr[n];
}

function fib(n) {
	if (n < 2) {
		return n;
	}
	return fib(n - 1) + fib(n - 2);
}
generateFib(10);
