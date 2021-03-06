import React, { useEffect, useState } from 'react';
import api from './API/api';
import './App.css';
//app
const App = () => {
	const [value, setValue] = useState('');
	const [userData, setUserData] = useState([]);
	// const [fetched, setFetched] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await api.get('test');
			setUserData(data);
			console.log(data);
			// setUserData(JSON.stringify(data));
		};
		fetchData();
	}, []);
	const handleSubmit = async () => {
		await api.post('form', { formValues: value });
		// setFetched(true);
	};
	return (
		<div className="App">
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button onClick={handleSubmit}>Submit</button>
			<div>
				{userData.map((user, i) => (
					<div key={i} style={{ border: '1px solid black', margin: '10px' }}>
						<span style={{ display: 'block' }}>{user.id},</span>
						<span style={{ display: 'block' }}>{user.cash},</span>
						<span style={{ display: 'block' }}>{user.credit},</span>
						<span style={{ display: 'block' }}>{user.isActive.toString()}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default App;
