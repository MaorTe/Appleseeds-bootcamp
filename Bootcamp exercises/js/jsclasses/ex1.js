class Animal {
	constructor(name, sound) {
		this.name = name;
		this.sound = sound;
	}

	getName() {
		return this.name;
	}
	getSound() {
		return this.sound;
	}

	print() {
		return console.log(this.name + ' ' + this.sound);
	}
}

animal1 = new Animal('a', 'aa');
animal2 = new Animal('b', 'bb');
animal3 = new Animal('c', 'cc');

animal1.print();
animal2.print();
animal3.print();
