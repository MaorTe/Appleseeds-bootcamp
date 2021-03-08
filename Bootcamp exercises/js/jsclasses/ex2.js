class Car {
	constructor(brand, speed) {
		this.brand = brand;
		this.speed = speed;
	}

	getBrand() {
		return this.brand;
	}
	getSpeed() {
		return this.speed;
	}

	setSpeed(speed) {
		this.speed = speed;
	}

	print() {
		return console.log(this.brand + ' ' + this.speed);
	}
}

let carArr = [];
car1 = new Car('a', 100);
car2 = new Car('b', 400);
car3 = new Car('c', 200);
car4 = new Car('d', 300);
carArr.push(car1);
carArr.push(car2);
carArr.push(car3);
carArr.push(car4);

// 7
let max = carArr[0].getSpeed();
const maxSpeed = carArr.find((car) => {
	if (car.getSpeed() > max) {
		max = car.getSpeed();
		return car;
	}
});
console.log(
	carArr.sort(function (a, b) {
		return parseFloat(a.getSpeed()) - parseFloat(b.getSpeed());
	})
);
// console.log(carArr.getSpeed().sort());
