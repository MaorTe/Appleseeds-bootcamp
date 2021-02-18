function findNextSquare(sq) {
	let root;
	// let nextroot;
	if (Math.sqrt(sq) % 1 === 0) {
		root = Math.sqrt(sq);
		return Math.pow(root + 1, 2);
	}
	return -1;
}

console.log(findNextSquare(625));
