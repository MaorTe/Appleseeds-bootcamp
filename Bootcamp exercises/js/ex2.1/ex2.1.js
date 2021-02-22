function describeCountry(country, population, capitalCity) {
	return `${country} has ${population} and its capital city is ${capitalCity}`;
}

let first = describeCountry('country1', 10, 'capitalCity1');
let second = describeCountry('country2', 100, 'capitalCity2');
let third = describeCountry('country3', 1000, 'capitalCity3');

console.log(`${first} 
and ${second}
and ${third}`);
