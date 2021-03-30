import { useEffect, useState } from 'react';
import API from './api/API';
import './App.css';

const App = () => {
	const [results, setResults] = useState([]);

	useEffect(() => {
		const search = async () => {
			const { data } = await API.get('1/');
			setResults([...results, data.title, data.director]);
		};
		if (results.length < 1) search();
	}, [results]);
	const renderResults = results.map((result, i) => (
		<div key={i}>
			<h2>{result}</h2>
		</div>
	));
	return <div>{renderResults}</div>;
};

export default App;
