function nb_year(p0, percent, aug, p) {
	debugger;
	let sum = 0;
	let i;
	for (i = 0; sum <= p; i++) {
		i === 0
			? (sum = p0 + (p0 * percent) / 100 + aug)
			: (sum = sum + (sum * percent) / 100 + aug);
	}
	return i;
}

console.log(nb_year(1000, 2, 50, 1200));
console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));
