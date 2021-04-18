import React, { useEffect, useState } from 'react';
import api from './API/api';
import './App.css';

const App = () => {
	const [value, setValue] = useState('');
	useEffect(() => {
		const fetchData = async () => {
			const data = await api.get('test');
			console.log(data);
		};
		fetchData();
	}, []);
	const handleSubmit = async () => {
		await api.post('form', { formValues: value });
	};
	return (
		<div className="App">
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
};

export default App;
