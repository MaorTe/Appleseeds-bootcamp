class sortNumber {
	constructor(numList) {
		this.numList = numList;
	}
	addNum(num) {
		for (let i = 2; i < num; i++) {
			if (num % i === 0) return false;
		}
		return num > 1 && this.numList.push(num);
	}
	remove(num) {
		return this.numList.filter((item) => item !== num);
	}
	getAll() {
		return this.numList;
	}
	print() {
		return console.log(this.numList);
	}
	share(arr) {
		return this.numList.filter((value) => arr.numList.includes(value)).length;
	}
	share1(arr) {
		return this.numList.filter((value) => arr.numList.includes(value));
	}
	union(arr) {
		let newArr = [...this.numList, arr.numList].flat(1);
		return [...new Set(newArr)];
	}
}
let prime = new sortNumber([11, 3, 5, 7]);
let prime1 = new sortNumber([11, 13]);
console.log(prime.addNum(11));
console.log(prime.getAll());
console.log(prime.remove(5));
console.log(prime.share(prime1));
console.log(prime.share1(prime1));
console.log(prime.union(prime1));
