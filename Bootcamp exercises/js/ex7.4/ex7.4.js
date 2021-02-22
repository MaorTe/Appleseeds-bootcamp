const candyStore = {
	candies: [
		{
			name: 'mint gum',
			id: 'as12f',
			price: 2,
			amount: 2,
		},
		{
			name: 'twix',
			id: '5hd7y',
			price: 5,
			amount: 4,
		},
	],
	cashRegister: 200,
};

function getCandy(candyStore, id) {
	for (let candy of candyStore.candies) {
		if (candy.id === id) return candy.id;
		else return false;
	}
}

function getPrice(candyStore, id) {
	for (let candy of candyStore.candies) {
		if (candy.id == id) return candy.price;
		else return false;
	}
}

function addCandy(candyStore, id, name, price) {
	for (let candy of candyStore.candies) {
		candy.id == id;
		candy.name == name;
		candy.price == price;
		candy.amount = 1;
	}
}

function buy(candyStore, id) {
	let totalCash = candyStore.cashRegister;
	for (let candy of candyStore.candies) {
		if (candy.id === id && candy.amount != 0) {
			totalCash += candy.price;
			candy.amount--;
		}
	}
}