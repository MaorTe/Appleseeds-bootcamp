const foods = ['falafel', 'sabich', 'hummus', 'pizza with extra', 'pineapple'];
// a.1
foods.sort();
console.log(foods);
// a.2
const des = foods.sort((a, b) => {
	if (a > b) return -1;
	if (a < b) return 1;
	return 0;
});
console.log(des);

const foodsWithUpperCase = [
	'falafel',
	'Sabich',
	'hummus',
	'pizza with extra pineapple',
];

// b.1
foodsWithUpperCase.sort(function (a, b) {
	let x = a.toUpperCase(),
		y = b.toUpperCase();
	return x === y ? 0 : x > y ? 1 : -1;
});
console.log(foodsWithUpperCase);

//-- b.2
foodsWithUpperCase.sort(function (a, b) {
	let x = a.toUpperCase(),
		y = b.toUpperCase();
	return x === y ? 0 : x > y ? -1 : 1;
});
console.log(foodsWithUpperCase);

const words = ['apple', 'supercalifragilisticexpialidocious', 'hi', 'zoo'];
//-- c
words.sort(function (a, b) {
	let x = a.toUpperCase(),
		y = b.toUpperCase();
	return x.length === y.length ? 0 : x.length > y.length ? -1 : 1;
});
console.log(words);
