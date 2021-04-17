const fs = require('fs');

//---- save ----
const save = (movies) => {
	const dataJSON = JSON.stringify(movies);
	fs.writeFileSync('./Database/movies.json', dataJSON);
};

//---- add ----
const add = (movie) => {
	const moviesData = findMovies();
	const duplicateMovie = moviesData.find((el) => el.id === movie.id);
	if (duplicateMovie) {
		console.log('Movie id already exists');
	} else {
		moviesData.push(movie);
		save(moviesData);
	}
};
//---- remove ----
const remove = (id) => {
	const moviesData = findMovies();
	const removeMovie = moviesData.filter((el) => el.id !== id);

	if (moviesData.length !== removeMovie.length) {
		save(removeMovie);
	} else {
		console.log("couldn't find movie");
	}
};

//---- update ----
const update = (id, title, rating, genre, length) => {
	const currentMoviesData = findMovies();
	const movieIndex = currentMoviesData.findIndex((el) => el.id === id);
	const movie = currentMoviesData.find((el) => el.id === id);

	if (movieIndex !== -1) {
		const editedMovie = {
			...movie,
			title: title || movie.title,
			rating: rating || movie.rating,
			genre: genre || movie.genre,
			length: length || movie.length,
		};
		currentMoviesData.splice(movieIndex, 1, editedMovie);
		save(currentMoviesData);
	}
};

const findMovies = () => {
	try {
		const dataJSON = fs.readFileSync('./Database/movies.json', 'utf-8');
		const data = JSON.parse(dataJSON);
		return data;
	} catch (e) {
		return [];
	}
};
const findMovie = (id) => {
	const moviesData = findMovies();
	const movie = moviesData.find((el) => el.id === id);
	if (movie) {
		return movie;
	} else {
		console.log("movie doesn't exists");
	}
};
module.exports = {
	findMovies,
	findMovie,
	add,
	remove,
	update,
};
