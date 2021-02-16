function step(N) {
	let mat = [];
	for (let i = 0; i < N; i++) {
		mat[i] = [];
		for (let j = 0; j < N; j++) {
			mat[i][j] = i >= j ? '#' : ' ';
		}
		console.log(`'${mat[i].join('')}'`);
	}
}

step(3);
