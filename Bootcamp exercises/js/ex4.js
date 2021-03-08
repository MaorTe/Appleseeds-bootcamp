class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	getX() {
		return this.x;
	}
	getY() {
		return this.y;
	}
	addToX(x) {
		return (this.x += x);
	}
	addToY(y) {
		return (this.y += y);
	}
	setX(x) {
		return (this.x = x);
	}
	setY(y) {
		return (this.y = y);
	}

	addPoint(point) {
		point.x = x;
		point.y = y;
	}
	isSame(point) {
		return (this.point.x = point.x && (this.point.y = point.y));
	}
	remove(num) {
		return this.numList.filter((item) => item !== num);
	}
	print() {
		console.log(`x value is: ${this.x}
					 y value is: ${this.y}`);
	}
}
