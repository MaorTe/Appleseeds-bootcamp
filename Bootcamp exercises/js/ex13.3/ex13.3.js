const food = ['Noodle', 'Pasta', 'Ice-cream', 'Meat', 'Cucumber', 'Olives'];
const food1 = ['Fries', 'Ice-cream', 'Pizza', 'Olives', 'Hamburgers'];

function compare(food, food1) {
	let same = [];
	for (let i = 0; i < food.length; i++) {
		for (let j = 0; j < food1.length; j++) {
			if (food[i] === food1[j]) same.push(food1[j]);
		}
	}
	return same.length !== 0 && same;
}

console.log(compare(food, food1));
