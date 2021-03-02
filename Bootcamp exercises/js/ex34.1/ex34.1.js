const baseEndPoint = 'https://swapi.dev/api/people/';
// const usersEndPoint = `${baseEndPoint}`;
// const planets = 'http://swapi.dev/api/planets';
// const planetsEndPoint = `${planets}`;
const arr = [];

function handleError(err) {
	console.log('theres an error');
	console.log(err);
}

async function displayCharacters() {
	const peopleResponse = await fetch(`${baseEndPoint}`);
	const people = await peopleResponse.json();
	for (let person of people.results) {
		const planetResponse = await fetch(`${person.homeworld}`);
		const planet = await planetResponse.json();
		arr.push({
			name: person.name,
			hairColor: person.hair_color,
			height: person.height,
			planet: { name: planet.name, population: planet.population },
		});
	}
	// for (let i = 1; i <= 10; i++) {
	// 	//gets the response
	// 	const response = await fetch(`${usersEndPoint}/${i}`);
	// 	//turn it into json
	// 	const data = await response.json();

	// 	const responsePlanet = await fetch(`${data.homeworld}`);
	// 	const dataPlanet = await responsePlanet.json();
	// 	arr.push({
	// 		name: data.name,
	// 		hairColor: data.hair_color,
	// 		height: data.height,
	// 		planet: { name: dataPlanet.name, population: dataPlanet.population },
	// 	});
	// }

	arr.forEach((currentItem) => {
		for (const [key, value] of Object.entries(currentItem)) {
			//make a span for each element
			const span = document.createElement('span');

			if (typeof value === 'object') {
				const span2 = document.createElement('span');
				span2.innerHTML = `${value.name}`;
				grid.appendChild(span2);
				span.innerHTML = `${value.population}`;
			} else {
				span.innerHTML = `${value}`;
			}
			grid.appendChild(span);
		}
	});
}

// make the table container
const table = document.createElement('div');
table.classList.add('table');

document.body.appendChild(table);

//make the grid content
const grid = document.createElement('div');
grid.classList.add('grid');
table.appendChild(grid);

// hard-code first line and second line of the table
const span = document.createElement('span');
{
}
const html = `
<span>
    <strong>star wars</strong>
</span>
<span>
    <strong>name</strong>
</span>
<span>
    <strong>hair</strong>
</span>
<span>
    <strong>height</strong>
</span>
<span>
    <strong>planet name</strong>
</span>
<span>
    <strong>planet population</strong>
</span>`;
grid.innerHTML = html;

displayCharacters().catch(handleError);
