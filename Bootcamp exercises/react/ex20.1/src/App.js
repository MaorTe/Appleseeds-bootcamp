import React, { useEffect, useState } from 'react';
import API from './api/API';
import './App.css';
import DataContainer from './components/DataContainer';

const App = () => {
	const [toggle, setToggle] = useState('Show');
	const [results, setResults] = useState([]);

	// useEffect(() => {
	// 	const fetch = async () => {
	// 		const { data } = await API.get('1/');
	// 		setResults([...results, data.title, data.director]);
	// 	};
	// 	if (results.length < 1) fetch();
	// }, []);

	useEffect(() => {
		setTimeout(() => {
			const toggleFetch = async () => {
				const { data } = await API.get('1/');
				console.log(data);
				setResults([...results, data.title, data.director, data.characters]);
			};
			// if (toggle)

			toggleFetch();
		}, 3000);
	}, [toggle]);
	const renderResults = results.map((result, i) => (
		<div key={i}>
			<div>{result}</div>
		</div>
	));
	const handleToggle = () => {
		return toggle === 'Show' ? setToggle('Hide') : setToggle('Show');
	};
	return (
		<div className="container">
			<button onClick={handleToggle}>{toggle}</button>
			{toggle === 'Hide' && (
				<DataContainer data={renderResults}></DataContainer>
			)}
		</div>
	);
};

export default App;
