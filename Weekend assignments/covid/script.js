const baseEndPoint = `https://corona-api.com/countries`;
const btnAsia = document.querySelector('.btn-asia');

const countriesContainer = document.querySelector('.countries');
const countriesArr = [];
let covidArr = [];
const arr = [];
let str = '';

async function fetchURL(url) {
	const response = await fetch(url);
	return response.json();
}
function getAllCountries() {
	const url = `https://api.codetabs.com/v1/proxy/?quest=https://restcountries.herokuapp.com/api/v1`;
	return fetchURL(url);
}
function getCovidByCountry(region) {
	// const url = `https://corona-api.com/countries/${region}`;
	const url = `https://corona-api.com/countries`;
	return fetchURL(url);
}
const displayDataCountry = () => {
	console.log(countriesArr);
};
const displayDataCovid = () => {
	console.log(covidArr);
};
draw('Asia');
btnAsia.addEventListener('click', (e) => {
	let continent = btnAsia.value;
	// if (continent !== '' && !arr.includes(continent)) {
	draw(continent);

	arr.push(continent);
	// }

	// console.log(countriesArr);
});

async function getData(countryName) {
	let covids = await getCovidByCountry(countryName);
	console.log(covids);
	let countries = await getAllCountries();

	countries.forEach(async (country) => {
		const countryName = document.createElement('span');

		if (country.region === 'Asia') {
			countriesArr.push(country.cca2);
			countryName.textContent += country.name.common;
			str += countryName.textContent + ',';
			countryName.classList.add('space');
		}
		countriesContainer.appendChild(countryName);
	});

	//filter
	covidArr = covids.data.filter((cov) => countriesArr.includes(cov.code));
	console.log(covidArr);

	displayDataCountry();
	// displayDataCovid();
	// countriesContainer.appendChild(card);
	//countriesContainer.appendChild(countryName);
}

// ----------------graph----------------
async function draw(continent) {
	await getData(continent).catch((err) => {
		console.log('there was an error fetching user');
		console.error(err);
	});

	let ctx = document.querySelector('#myChart');
	let myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: str.split(','),
			datasets: [
				{
					label: `Covid 19 'confirmed'`,
					// backgroundColor: '#1d2d506e',
					// borderColor: '#133b5c',
					borderWidth: '1',
					data: [12, 19, 3, 5, 2, 3],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)',
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)',
					],
					borderWidth: 1,
				},
			],
		},
		options: {
			legend: {
				labels: {
					// This more specific font property overrides the global property
					fontColor: '#fff',
				},
			},
			title: {
				display: true,
				text: 'Covid 19 Stats',
				fontSize: 20,
				fontColor: '#fff',
			},
			scales: {
				xAxes: [
					{
						ticks: {
							fontColor: '#fff',
							beginAtZero: true,
						},
					},
				],
				yAxes: [
					{
						ticks: {
							fontColor: '#fff',
							beginAtZero: true,
						},
					},
				],
			},
		},
	});
}
