function generateTrib(n) {
	let fib = [];
	fib[0] = 0;
	fib[1] = 1;
	fib[2] = 1;
	for (let i = 3; i <= n; i++) {
		fib[i] = fib[i - 3] + fib[i - 2] + fib[i - 1];
	}
	console.log(fib);
}

function tribonacci(signature, n) {
	var trib = signature;
	for (i = 3; i < n; i++) {
		trib.push(trib[i - 1] + trib[i - 2] + trib[i - 3]);
	}
	return trib.slice(0, n);
}
console.log(tribonacci([0, 0, 1], 10));
// generateTrib(10);
