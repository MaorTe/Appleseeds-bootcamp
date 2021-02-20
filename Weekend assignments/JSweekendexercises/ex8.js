function findPerimeter(len, wid) {
	if (!/\d+/g.test(len + wid))
		return 'parameters must be numbers from 1..9 only.';
	else if (typeof (len + wid) !== 'number') return `parameter is not a number`;
	return len * 2 + wid * 2;
}
console.log(findPerimeter(6, 'aa'));
console.log(findPerimeter(6, '7'));
console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10));
console.log(findPerimeter(2, 9));
