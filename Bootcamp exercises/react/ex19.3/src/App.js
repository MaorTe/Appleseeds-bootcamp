import { useEffect, useState } from 'react';
import API from './api/API';
import './App.css';

const App = () => {
	const [results, setResults] = useState([]);
	const [term, setTerm] = useState('');
	const [search, setSearch] = useState('hooks');

	useEffect(() => {
		const fetch = async () => {
			const { data } = await API.get(`search?query=${term}`);
			setResults(data.hits);
		};
		fetch();
	}, [search]);

	const renderResults = results.map((result) => (
		<li key={result.objectID}>
			<a href={result.url}>{result.title}</a>
		</li>
	));
	const handleChange = (e) => {
		setTerm(e.target.value);
	};
	return (
		<div>
			<input type="text" onChange={handleChange} value={term} />
			<button onClick={() => setSearch(term)}>Search</button>
			<ul>{renderResults}</ul>
		</div>
	);
};

export default App;
