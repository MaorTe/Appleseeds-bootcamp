const baseEndPoint = `https://corona-api.com/countries`;
const btnAsia = document.querySelector('.btn-asia');

const countriesContainer = document.querySelector('.countries');
let countriesArr = [];
let covidArr = [];
const arr = [];

async function fetchURL(url) {
	const response = await fetch(url);
	return response.json();
}
function getAllCountries() {
	const url = `https://api.codetabs.com/v1/proxy/?quest=https://restcountries.herokuapp.com/api/v1`;
	return fetchURL(url);
}
function getCovidByCountry(country) {
	// const url = `https://corona-api.com/countries/${country}`;
	const url = `https://corona-api.com/countries`;
	return fetchURL(url);
}
btnAsia.addEventListener('click', (e) => {
	let continent = btnAsia.value;
	draw();
	// if (continent !== '' && !arr.includes(continent)) {
	getUser(continent).catch((err) => {
		console.log('there was an error fetching user');
		console.error(err);
	});
	arr.push(continent);
	// }
});

async function getUser(countryName) {
	let covid = await getCovidByCountry(countryName);
	console.log(covid);
	let countries = await getAllCountries();
	const card = document.createElement('div');
	// name.textContent = countries.data.name;
	// console.log(countries.data);
	// console.log(covid.data.latest_data.confirmed);
	// covidArr = covid.map((currentItem) => {
	// console.log(currentItem);
	// covidArr.push(currentItem.data.latest_data.confirmed);
	// console.log(currentItem.data.latest_data.confirmed);
	// });
	debugger;
	countriesArr = countries.map((currentItem) => {
		const countryName = document.createElement('span');
		countriesArr.push(currentItem.name.common);
		if (currentItem.region === 'Asia') {
			countryName.textContent += currentItem.name.common;
			countryName.classList.add('space');
		}
		countriesContainer.appendChild(countryName);
	});
	// console.log(covidArr);
	// countriesContainer.appendChild(card);
	//countriesContainer.appendChild(countryName);
}

// // ----------------graph----------------
function draw() {
	let ctx = document.querySelector('#myChart');
	let myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: [countriesArr],
			datasets: [
				{
					label: '# of Votes',
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
							// Include a dollar sign in the ticks
							callback: function (value, index, countriesArr) {
								return countriesArr;
								// .forEach((currentItem) => {
								// 	return (value = currentItem);
								// });
							},
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
