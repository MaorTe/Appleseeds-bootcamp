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
		point.x += x;
		point.y += y;
	}
	isSame(point) {
		return this.x === point.x && this.y === point.y;
	}
	// isSame(point) {
	// 	return this.x === point.x && this.y === point.y ? true : false;
	// }
	print() {
		console.log(`x value is: ${this.x}
					 y value is: ${this.y}`);
	}
}

class PointWorld {
	constructor() {
		this.pointList = [];
	}
	descendingOrderY() {
		return this.pointList.sort((a, b) => b.getY() - a.getY());
	}
	unique() {
		let xs = [...new Set(this.pointList.map((item) => item.getX()))];
		let ys = [...new Set(this.pointList.map((item) => item.getY()))];
		let newArr = [];
		for (let i = 0; i < xs.length; i++) {
			newArr.push(new Point(xs[i], ys[i]));
		}
		return newArr;
	}
	//another way
	// isUnique() {
	// 	const uniqueArr = [];
	// 	this.list.forEach(point => {
	// 	  const x = point.x;
	// 	  const y = point.y;
	// 	  if (!uniqueArr.find((point2) => point2.isSame(point))) {
	// 		uniqueArr.push(point);
	// 	}})
	// 	return uniqueArr;
	//   }
	sumAllX() {
		return this.pointList.reduce((acc, x) => acc + x.getX(), 0);
	}
	isPointExist(point) {
		return this.pointList.find((p) => {
			return p.x === point.getX() && p.y === point.getY();
		})
			? true
			: false;
	}
}
const p1 = new Point(1, 2);
const p2 = new Point(3, 4);
const p3 = new Point(5, 6);
const p4 = new Point(3, 4);

const pw = new PointWorld();
pw.pointList = [p1, p2, p3, p4];
console.log(pw.descendingOrderY());
console.log(pw.unique());
console.log(pw.sumAllX());
console.log(pw.isPointExist(p1));
