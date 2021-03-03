const baseEndPoint = `http://www.omdbapi.com/`;
const API_KEY = 'apikey=1ff185cc';
const input = document.querySelector('input');
const form = document.querySelector('#form');
const container = document.querySelector('.details');
const arr = [];

form.addEventListener('submit', (e) => {
	let movieName = input.value;
	input.value = '';
	e.preventDefault();

	getMovie(movieName).catch((err) => {
		console.log('there was an error fetching user');
		console.error(err);
	});
	if (container.firstChild) container.removeChild(container.firstChild);
});

async function getMovie(movieName) {
	const movieResponse = await fetch(
		`${baseEndPoint}?${API_KEY}&t=${movieName}`
	);
	const movie = await movieResponse.json();

	const card = document.createElement('div');
	const poster = document.createElement('img');
	const title = document.createElement('p');
	const genre = document.createElement('p');
	const year = document.createElement('p');
	const plot = document.createElement('p');
	const director = document.createElement('p');
	const actors = document.createElement('p');
	const ratings = document.createElement('p');

	poster.src = movie.Poster;
	poster.width = 150;
	poster.height = 150;
	title.textContent = movie.Title;
	genre.textContent = movie.Genre;
	year.textContent = movie.Year;
	plot.textContent = movie.Plot;
	director.textContent = movie.Director;
	actors.textContent = movie.Actors;

	movie.Ratings.forEach((rating) => {
		arr.push(rating.Source);
	});

	if (
		!arr.includes('Internet Movie Database') &&
		!arr.includes('Metacritic') &&
		!arr.includes('Rotten Tomatoes')
	)
		return 'not all sources';

	ratings.textContent = arr;

	container.appendChild(card);
	card.appendChild(poster);
	card.appendChild(title);
	card.appendChild(genre);
	card.appendChild(year);
	card.appendChild(plot);
	card.appendChild(director);
	card.appendChild(actors);
	card.appendChild(ratings);
	card.classList.add('space');
}
