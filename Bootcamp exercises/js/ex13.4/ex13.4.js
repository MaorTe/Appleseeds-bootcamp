function ninjaStep(N) {
	let mat = [];
	for (let i = 0; i < N; i++) {
		mat[i] = [];
		for (let j = 0; j < N; j++) {
			mat[i][j] = i >= j ? '#' : ' ';
		}
		console.log(`'${mat[i].join('')}'`);
	}
}

function regularStep(N) {
	for (let i = 1; i <= N; i++) {
		console.log(`'${'#'.repeat(i)}${' '.repeat(N - i)}'`);
	}
}
ninjaStep(3);
