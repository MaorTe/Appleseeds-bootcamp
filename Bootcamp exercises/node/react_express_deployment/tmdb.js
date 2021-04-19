const axios = require('axios');
const { tmdb } = require('./config/keys');

const popularMovies = async () => {
	const data = await axios.get(
		`https://api.themoviedb.org/3/movie/popular?api_key=${tmdb}&language=en-US&page=1`
	);
	return data;
};
module.exports = { popularMovies };
