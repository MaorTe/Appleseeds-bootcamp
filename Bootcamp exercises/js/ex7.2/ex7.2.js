const myCountry = {
	country: 'Finland',
	capital: 'Helsinki’.',
	language: 'Finnish',
	population: '6 million',
	neighbours: ['a', 'b', 'c'],

	describe() {
		console.log(`${this.country} has ${this.population} people, their mother tongue is ${this.language}, they
		have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
	},
	checkIsland() {
		this.isIsland = this.neighbours.length <= 0 ? true : false;
	},
};
console.log(myCountry);
