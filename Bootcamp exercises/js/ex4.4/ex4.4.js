function sevenBoom(n) {
	for (let i = 1; i <= n; i++) {
		if (i.toString().includes(7) && i % 7 === 0) console.log(i + ' BOOM-BOOM');
		else if (i % 7 === 0) console.log(i + ' BOOM');
	}
}
console.log(sevenBoom(18));
