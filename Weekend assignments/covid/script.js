const baseEndPoint = `https://corona-api.com/countries`;

const countriesContainer = document.querySelector('.countries');
const countriesArr = [];
let covidArr = [];
let str = '';
let obj = {};

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
function sorted(obj) {
	return obj.sort(function (a, b) {
		return a.code.toLowerCase().localeCompare(b.code.toLowerCase());
	});
}
draw('Asia');
function ButtonRegionSelected(e) {
	let regionSelected = e.target.textContent;
	UpdateChartData(myChart, regionSelected);
}
function ButtonCasesSelected(e) {
	let caseSelected = e.target.textContent;
	UpdateChartData(myChart, caseSelected);
}

function setCountriestoDOM(countriesArr) {
	countriesContainer.innerHTML = '';
	countriesArr.forEach(async (country) => {
		const countryName = document.createElement('span');
		countryName.textContent += country.name.common;
		// str += countryName.textContent + ',';
		countryName.classList.add('space');
		countriesContainer.appendChild(countryName);
		// console.log(str);
	});
}

async function getData(regionFromListener) {
	let covids = await getCovidByCountry(regionFromListener);
	let countries = await getAllCountries();

	let countriesArr = [];
	let countriesByCode = [];

	//get all countries of selected region
	countries.forEach(async (country) => {
		if (country.region === regionFromListener) {
			// asiaObj = { [country.cca2]: country.name.common };
			countriesArr.push(country);
			countriesByCode.push(country.cca2);
			// countriesByCode1.push(country.name.common);
		}
	});
	console.log(countriesArr);

	//set text to DOM
	setCountriestoDOM(countriesArr);
	// ======================================

	//filter countries
	const filtered = covids.data.filter((cov) =>
		countriesByCode.includes(cov.code)
	);

	obj = {};
	filtered.forEach((country) => {
		obj[country.code] = {
			name: country.name,
			deaths: country.latest_data.deaths,
			confirmed: country.latest_data.confirmed,
			recovered: country.latest_data.recovered,
			critical: country.latest_data.critical,
		};
	});
	console.log(obj);
	return obj;
}
// ------------------------------------
// selecting a region button
const regionContainer = document.querySelectorAll('.container-regions button');
// this forEach will attach event listeners to all childnodes buttons NodeList
regionContainer.forEach((el) => {
	el.addEventListener('click', ButtonRegionSelected);
});
// ------------------------------------
// selecting a case button
const casesContainer = document.querySelectorAll('.container-cases button');
// this forEach will attach event listeners to all childnodes buttons NodeList
casesContainer.forEach((el) => {
	el.addEventListener('click', ButtonCasesSelected);
});

// ----------------graph----------------
let myChart;
async function draw(region) {
	const data = await getData(region).catch((err) => {
		console.log('there was an error fetching user');
		console.error(err);
	});

	const yLabels = Object.entries(data).map((currentItem) => {
		return currentItem[1].confirmed;
	});
	let ctx = document.querySelector('#myChart');
	myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: str.split(','),
			datasets: [
				{
					label: `Covid 19 'confirmed'`,
					// backgroundColor: '#1d2d506e',
					// borderColor: '#133b5c',
					borderWidth: '1',
					data: yLabels,
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

async function UpdateChartData(chart, region) {
	// get the data by region
	const data = await getData(region).catch((err) => {
		console.log('there was an error fetching user');
		console.error(err);
	});

	// get the x-axis and y-axis data
	const yLabels = Object.entries(data).map((currentItem) => {
		return currentItem[1].confirmed;
	});
	const xLabels = Object.entries(data).map((currentItem) => {
		return currentItem[1].name;
	});

	// insert x and y axis data into graph
	removeData(chart);
	chart.data.datasets[0].label = `Covid 19 in ${region}`;
	chart.data.datasets[0].data = yLabels;
	chart.data.labels = xLabels;
	chart.update();
}
async function removeData(chart) {
	chart.data.labels.pop();
	chart.data.datasets.forEach((dataset) => {
		dataset.data.pop();
	});
}
