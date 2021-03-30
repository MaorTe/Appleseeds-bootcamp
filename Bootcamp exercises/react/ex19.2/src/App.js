import { useEffect, useState } from 'react';
import API from './api/API';
import './App.css';

const App = () => {
	const [term, setTerm] = useState('');
	const [results, setResults] = useState([]);
	const [filterCountries, setFilterCountries] = useState([]);

	useEffect(() => {
		const fetch = async () => {
			const { data } = await API.get('all/');
			const countryNames = data.map((country) => country.name);
			setResults(countryNames);
		};
		fetch();
	}, []);
	useEffect(() => {
		const search = () => {
			const filtered = results.filter((country) =>
				country.toLowerCase().includes(term.toLowerCase())
			);
			setFilterCountries(filtered);
		};
		search();
		// console.log(term);
		// if (term) search();
	}, [term]);

	const renderResults = results.map((result, i) => (
		<div key={i}>
			<li>{result}</li>
		</div>
	));
	const handleChange = (e) => {
		setTerm(e.target.value);
	};
	return (
		<div>
			<input type="text" onChange={handleChange} value={term} />
			<ul>{term ? filterCountries : renderResults}</ul>
		</div>
	);
};

export default App;
