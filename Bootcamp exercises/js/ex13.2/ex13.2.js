const populations = [1440, 2440, 3440, 4440];

const percentageOfWorld2 = (population) =>
	((population / 7900) * 100).toFixed(1);

function populationPercentages(populations) {
	const percentages = [];
	let i = 0;
	while (i < populations.length) {
		const element = percentageOfWorld2(populations[i]);
		percentages.push(element);
		i++;
	}
	console.log(percentages);
}

console.log(populationPercentages(populations));
//for loop definetly better
