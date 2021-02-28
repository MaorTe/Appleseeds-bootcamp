function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
	this.name = pokemonName;
	this.type = pokemonType;
	this.attackList = pokemonAttackList;
}

const poke1 = new Pokemon('Gliscor', 'Ground - Flying', [
	'Fire Fang',
	'Fury',
	'Swipes',
	'Sand Attack',
	'Night Slash',
]);
const poke2 = new Pokemon('Gyarados', 'Water - Flying', [
	'Ice Fang',
	'Crunch',
	'Waterfall',
	'Hydro Pump',
]);

Pokemon.prototype.callPokemon = function () {
	return `I choose you, ${this.name}`;
};
Pokemon.prototype.attack = function (attNumber) {
	return `${this.name} used ${this.attackList[attNumber]}`;
};
console.log(poke2.callPokemon(), poke2.attack(2));
console.log(poke1.callPokemon(), poke1.attack(3));
