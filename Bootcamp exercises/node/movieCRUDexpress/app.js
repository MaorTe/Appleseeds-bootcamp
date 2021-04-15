const express = require('express');
const app = express();
const { findMovies, add, findMovie, remove, update } = require('./utils/utils');

app.use(express.json());

//get all movies
app.get('/api/movies', (req, res) => {
	const movies = findMovies();
	res.status(200).send(movies);
});

//add a movie
app.post('/api/movies', (req, res) => {
	const newMovie = add(req.body);
	res.status(200).send(newMovie);
});

//get a single movie
app.get('/api/movies/:id', (req, res) => {
	const { id } = req.params;
	const movie = findMovie(id);
	res.status(200).send(movie);
});

//update an existing movie
app.put('/api/movies/:id', (req, res) => {
	const { id } = req.params;
	const movieToUpdate = update(id, 'aaa');
	res.status(200).send(movieToUpdate);
});

//deletes an existing movie
app.delete('/api/movies/:id', (req, res) => {
	const { id } = req.params;
	const movieToRemove = remove(id);
	res.status(200).send(movieToRemove);
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log('listening...');
});
